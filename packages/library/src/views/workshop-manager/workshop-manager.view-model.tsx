import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from 'react';

import {
  WorkshopManagerHandlers,
  WorkshopManagerState,
} from './workshop-manager.definition';

import { mockOwnerData } from '../../../__synthetic__/owner.data';
import { useWorkshopManagerService } from '../../lib';

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
  },
});

export const useWorkshopManager = () => {
  return useContext(WorkshopManagerContext);
};

export const WorkshopManagerProvider = ({
  children,
}: {
  children?: ReactElement;
}) => {
  const WorkshopManagerService = useWorkshopManagerService(mockOwnerData[0].id);

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
      await WorkshopManagerService.createWorkshop(workshop);
      isSuccess(true);

      await fetchOwner();
    } catch (e) {
      isSuccess(false);
    }
  };

  const editWorkshop: WorkshopManagerHandlers['editWorkshop'] = async (
    workshop,
    isSuccess
  ): Promise<void> => {
    try {
      await WorkshopManagerService.updateWorkshopById(workshop.id, workshop);

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
        return connection.id !== id;
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
        },
      }}
    >
      {children}
    </WorkshopManagerContext.Provider>
  );
};
