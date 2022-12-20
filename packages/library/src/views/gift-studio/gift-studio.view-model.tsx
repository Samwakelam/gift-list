import { FillType } from '@sam/icons';
import { Gift } from '@sam/types';
import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from 'react';
import { tw } from 'twind';
import { GiftStudioHandlers, GiftStudioState } from './gift-studio.definition';

import * as S from './gift-studio.styles';

const defaultGift: Omit<Gift, 'id'> = {
  properties: { purchased: false, purchasedBy: null, watching: [] },
  createdAt: new Date(),
  name: 'New Gift',
  lookupKey: '',
  description: null,
  visibility: {
    isVisible: false,
    sharedWith: [],
  },
};

export const GiftStudioContext = createContext<{
  state: GiftStudioState;
  handlers: GiftStudioHandlers;
}>({
  state: {
    gift: defaultGift,
    selectedWidgets: [],
    isLoading: false,
    isProcessing: false,
    unSavedChanges: false,
  },
  handlers: {
    addWidget: async () => {},
    editGift: async () => {},
    removeWidget: async () => {},
    resolveSaveContainer: () => ({
      message: 'Saved',
      icon: null,
      className: tw(S.SavingContainerSavedCss),
    }),
  },
});

export const useGiftStudio = () => {
  return useContext(GiftStudioContext);
};

export const GiftStudioProvider = ({
  userId,
  children,
}: {
  userId: string;
  children: ReactElement;
}) => {
  const [state, setState] = useState<GiftStudioState>({
    gift: defaultGift,
    selectedWidgets: [],
    isLoading: false,
    isProcessing: false,
    unSavedChanges: false,
  });

  const addWidget: GiftStudioHandlers['addWidget'] = async (
    widget,
    isSuccess
  ) => {
    if (state.selectedWidgets.includes(widget.key)) {
      return;
    }

    const selectedWidgets: string[] = [...state.selectedWidgets, widget.key];

    setState((prev) => ({
      ...prev,
      unSavedChanges: true,
      selectedWidgets,
      gift: {
        ...state.gift,
        [widget.key as keyof Gift]: '',
      },
    }));

    isSuccess(true);
  };

  const editGift: GiftStudioHandlers['editGift'] = async (data, isSuccess) => {
    if (!Array.isArray(data)) {
      const { widgetKey, value } = data;
      setState((prev) => ({
        ...prev,
        unSavedChanges: true,
        gift: {
          ...state.gift,
          [widgetKey]: value,
        },
      }));
    }

    if (Array.isArray(data)) {
      const dataObject: Partial<Gift> = {};
      data.forEach((obj) => {
        //@ts-ignore
        dataObject[obj.widgetKey] = obj.value;
      });

      setState((prev) => ({
        ...prev,
        gift: {
          ...state.gift,
          ...dataObject,
        },
      }));
    }

    isSuccess(true);
  };

  const removeWidget: GiftStudioHandlers['removeWidget'] = async (
    key,
    isSuccess
  ) => {
    const current = { ...state.gift };

    const selectedWidgets = [...state.selectedWidgets];
    const index = selectedWidgets.findIndex((item) => item === key);
    selectedWidgets.splice(index, 1);

    setState((prev) => ({
      ...prev,
      unSavedChanges: true,
      selectedWidgets,
      gift: current,
    }));

    isSuccess(true);
  };

  const resolveSaveContainer: GiftStudioHandlers['resolveSaveContainer'] =
    () => {
      if (state.isProcessing) {
        return {
          message: 'Saving...',
          icon: {
            icon: 'spinner',
            ariaLabel: 'saving',
          },
          className: tw(S.SavingContainerSavingCss),
        };
      }

      if (state.unSavedChanges) {
        return {
          message: 'Unsaved Changes',
          icon: {
            icon: 'circle-bang',
            ariaLabel: 'warning',
            fill: FillType.OUTLINE,
          },
          className: tw(S.SavingContainerUnsavedCss),
        };
      }

      return {
        message: 'Saved',
        icon: {
          icon: 'circle-tick',
          ariaLabel: 'tick',
          fill: FillType.OUTLINE,
        },
        className: tw(S.SavingContainerSavedCss),
      };
    };

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
        handlers: { addWidget, editGift, removeWidget, resolveSaveContainer },
      }}
    >
      {children}
    </GiftStudioContext.Provider>
  );
};
