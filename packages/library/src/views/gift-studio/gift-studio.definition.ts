import { IconProps } from '@sam/icons';
import { Gift, Widget } from '@sam/types';

export type GiftStudioProps = {};

export type SaveContainerProps = {
  message: string;
  icon: IconProps | null;
  className: string;
};

export type GiftStudioState = {
  gift: Omit<Gift, 'id'> | Gift;
  selectedWidgets: string[];
  isLoading: boolean;
  isProcessing: boolean;
  unSavedChanges: boolean;
};

export type EditModelProps = { widgetKey: string; value: string };

export type GiftStudioHandlers = {
  addWidget: (
    widget: Widget,
    callback: (result: boolean) => void
  ) => Promise<void>;
  editGift: (
    data: EditModelProps | EditModelProps[],
    isSuccess: (result: boolean) => void
  ) => void;
  removeWidget: (
    key: string,
    callback: (result: boolean) => void
  ) => Promise<void>;
  resolveSaveContainer: () => SaveContainerProps;
};
