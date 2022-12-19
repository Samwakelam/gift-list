import { Hook, Widget } from '@sam/types';
import { InputGroupHandlers, InputGroupState } from '../../../../forms';

export type WidgetRendererProps = {
  widget?: Widget;
  value?: string;
};

export type WidgetRendererState = {
  editModalIsOpen: boolean;
};

export type WidgetRendererHandlers = {
  onModalRequest: (isOpen: boolean) => void;
};
