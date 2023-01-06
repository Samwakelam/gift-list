import { Workshop } from '@sam/types';
import { useRouter } from 'next/router';
import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from 'react';

import { useListManagerService } from '../../lib/list-manager';

import {
  ListManagerHandlers,
  ListManagerState,
} from './list-manager.definition';

export const ListManagerContext = createContext<{
  state: ListManagerState;
  handlers: ListManagerHandlers;
}>({
  state: {
    workshop: null,
    lists: [],
    connections: [],
    isLoading: true,
  },
  handlers: {
    addList: async () => {},
    editList: async () => {},
    editWorkshop: async () => {},
    removeList: async () => {},
    removeWorkshop: async () => {},
    resolveLink: () => '',
  },
});

export const useListManager = () => {
  return useContext(ListManagerContext);
};

export const ListManagerProvider = ({
  workshop,
  children,
}: {
  workshop: Workshop;
  children?: ReactElement;
}) => {
  const ListManagerService = useListManagerService(workshop);

  const [state, setState] = useState<ListManagerState>({
    workshop: null,
    lists: [],
    connections: [],
    isLoading: true,
  });

  const fetchWorkshop = async () => {
    try {
      const workshop = await ListManagerService.getWorkshop();

      setState((prev) => ({
        ...prev,
        workshop,
        lists: workshop ? workshop.lists : [],
        connections: workshop ? workshop.visibility.sharedWith : [],
      }));
    } catch (e) {}
  };

  const addList: ListManagerHandlers['addList'] = async (list, isSuccess) => {
    try {
      const _list = {
        ...list.entity,
        visibility: {
          ...list.entity.visibility,
          sharedWith: list.allShare ? state.connections : [],
        },
      };
      await ListManagerService.createList(_list);

      isSuccess(true);

      await fetchWorkshop();
    } catch (e) {
      isSuccess(false);
    }
  };

  const editList: ListManagerHandlers['editList'] = async (list, isSuccess) => {
    try {
      await ListManagerService.updateListById(list._id, list);

      isSuccess(true);

      await fetchWorkshop();
    } catch (e) {
      isSuccess(false);
    }
  };

  const editWorkshop: ListManagerHandlers['editWorkshop'] = async (
    workshop,
    isSuccess
  ) => {
    try {
      await ListManagerService.updateWorkshop(workshop);

      isSuccess(true);

      await fetchWorkshop();
    } catch (e) {
      isSuccess(false);
    }
  };

  const removeList: ListManagerHandlers['removeList'] = async (
    id,
    isSuccess
  ) => {
    try {
      await ListManagerService.deleteListById(id);

      isSuccess(true);

      await fetchWorkshop();
    } catch (e) {
      isSuccess(false);
    }
  };

  const removeWorkshop = async () => {};

  const resolveLink: ListManagerHandlers['resolveLink'] = (
    location: string
  ) => {
    // const router = useRouter();

    switch (location) {
      case 'workshop-manager': {
        // return `/${router.query.userId}/workshop-manager`;
      }
      case 'site-manager': {
        // return `/${router.query.userId}/workshop/${router.query.workshopId}`;
      }
      default: {
        return '/';
      }
    }
  };

  useEffect(function onMount() {
    const onMount = async () => {
      await Promise.all([fetchWorkshop()]);
      setState((prev) => ({ ...prev, isLoading: false }));
    };

    onMount();
  }, []);

  return (
    <ListManagerContext.Provider
      value={{
        state: { ...state },
        handlers: {
          addList,
          editList,
          editWorkshop,
          removeList,
          removeWorkshop,
          resolveLink,
        },
      }}
    >
      {children}
    </ListManagerContext.Provider>
  );
};
