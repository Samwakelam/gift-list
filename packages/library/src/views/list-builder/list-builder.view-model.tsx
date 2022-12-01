import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from 'react';

import { mockListData } from '../../../__synthetic__/list.data';

import {
  ListBuilderHandlers,
  ListBuilderState,
} from './list-builder.definition';

export const ListBuilderContext = createContext<{
  state: ListBuilderState;
  handlers: ListBuilderHandlers;
}>({ state: { list: null }, handlers: {} });

export const useListBuilder = () => {
  return useContext(ListBuilderContext);
};

export const ListBuilderProvider = ({
  children,
}: {
  children: ReactElement;
}) => {
  const [state, setState] = useState<ListBuilderState>({
    list: null,
  });

  useEffect(function setInitial() {
    const list = mockListData;

    setState((prev) => ({
      ...prev,
      list,
    }));
  }, []);

  return (
    <ListBuilderContext.Provider
      value={{
        state: { ...state },
        handlers: {},
      }}
    >
      {children}
    </ListBuilderContext.Provider>
  );
};
