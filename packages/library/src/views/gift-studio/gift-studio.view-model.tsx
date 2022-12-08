import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from 'react';
import { GiftStudioHandlers, GiftStudioState } from './gift-studio.definition';

export const GiftStudioContext = createContext<{
  state: GiftStudioState;
  handlers: GiftStudioHandlers;
}>({
  state: {
    gift: null,
    isLoading: true,
  },
  handlers: {},
});

export const useGiftStudio = () => {
  return useContext(GiftStudioContext);
};

export const GiftStudioProvider = ({
  children,
}: {
  children: ReactElement;
}) => {
  const [state, setState] = useState<GiftStudioState>({
    gift: null,
    isLoading: true,
  });

  useEffect(function onMount() {
    const onMount = () => {
      setState((prev) => ({ ...prev, isLoading: false }));
    };
    onMount();
  }, []);

  return (
    <GiftStudioContext.Provider
      value={{
        state: { ...state },
        handlers: {},
      }}
    >
      {children}
    </GiftStudioContext.Provider>
  );
};
