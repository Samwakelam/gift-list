import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from 'react';

import { Owner } from '@sam/types';

import { useWorkshopManagerService } from '../../lib';

import {
  WorkshopManagerHandlers,
  WorkshopManagerState,
} from './workshop-manager.definition';

import { useRouter } from 'next/router';

export const WorkshopManagerContext = createContext<{
  state: WorkshopManagerState;
  handlers: WorkshopManagerHandlers;
}>({
  state: {
    workshops: [],
    owner: null,
    connections: [],
    isLoading: true,
  },
  handlers: {
    addConnection: () => {},
    addWorkshop: async (workshop, callback) => {},
    editWorkshop: async (workshop, callback) => {},
    removeConnection: () => {},
    removeWorkshop: async (id, callback) => {},
    resolveLink: () => '/',
  },
});

export const useWorkshopManager = () => {
  return useContext(WorkshopManagerContext);
};

export const WorkshopManagerProvider = ({
  user,
  children,
}: {
  user: Owner;
  children?: ReactElement;
}) => {
  const WorkshopManagerService = useWorkshopManagerService(user);

  const [state, setState] = useState<WorkshopManagerState>({
    connections: [],
    owner: null,
    workshops: [],
    isLoading: true,
  });

  const fetchOwner = async (): Promise<void> => {
    try {
      const owner = await WorkshopManagerService.getOwner();

      setState((prev) => ({
        ...prev,
        owner,
        workshops: owner ? owner.workshops : [],
        connections: owner ? owner.connections : [],
      }));
    } catch (e) {}
  };

  const addConnection: WorkshopManagerHandlers['addConnection'] = async (
    id,
    isSuccess
  ): Promise<void> => {
    try {
      const connection = await WorkshopManagerService.getOwnerById(id);

      if (connection) {
        if (state.connections.includes(connection)) {
          isSuccess(false);
          return;
        }

        const connections = [...state.connections];
        connections.push(connection);

        setState((prev) => ({ ...prev, connections }));
        isSuccess(true);
      }
    } catch (e) {
      isSuccess(false);
    }
  };

  const addWorkshop: WorkshopManagerHandlers['addWorkshop'] = async (
    workshop,
    isSuccess
  ): Promise<void> => {
    try {
      const _workshop = {
        ...workshop.entity,
        visibility: {
          ...workshop.entity.visibility,
          sharedWith: workshop.allShare ? state.connections : [],
        },
      };

      const response = await WorkshopManagerService.createWorkshop(_workshop);
      if (response) {
        isSuccess(true);

        // useNavigation().navigate(`${state.owner}/workspace/${response._id}`);
        await fetchOwner();
      }
    } catch (e) {
      isSuccess(false);
    }
  };

  const editWorkshop: WorkshopManagerHandlers['editWorkshop'] = async (
    workshop,
    isSuccess
  ): Promise<void> => {
    try {
      await WorkshopManagerService.updateWorkshopById(workshop._id, workshop);

      isSuccess(true);

      await fetchOwner();
    } catch (e) {
      isSuccess(false);
    }
  };

  const removeConnection = (id: string): void => {
    try {
      const connections = [...state.connections];
      const updatedConnections = connections.filter((connection) => {
        return connection._id !== id;
      });

      setState((prev) => ({
        ...prev,
        connections: updatedConnections,
      }));
    } catch (e) {}
  };

  const removeWorkshop: WorkshopManagerHandlers['removeWorkshop'] = async (
    id: string,
    isSuccess
  ): Promise<void> => {
    try {
      await WorkshopManagerService.deleteWorkshopById(id);

      isSuccess(true);

      await fetchOwner();
    } catch (e) {
      isSuccess(false);
    }
  };

  const resolveLink: WorkshopManagerHandlers['resolveLink'] = () => {
    const router = useRouter();

    const path = `/${router.query.userId}/workshop-manager`;

    return path;
  };

  useEffect(function onMount() {
    const onMount = async () => {
      await Promise.all([fetchOwner()]);
      setState((prev) => ({ ...prev, isLoading: false }));
    };

    onMount();
  }, []);

  return (
    <WorkshopManagerContext.Provider
      value={{
        state: { ...state },
        handlers: {
          addConnection,
          addWorkshop,
          editWorkshop,
          removeConnection,
          removeWorkshop,
          resolveLink,
        },
      }}
    >
      {children}
    </WorkshopManagerContext.Provider>
  );
};
