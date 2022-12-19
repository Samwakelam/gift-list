import { DispatchesType, Widget } from '@sam/types';

export enum WidgetCardType {
  IMAGE = 'image',
  ICON = 'icon',
}

export type WidgetCardProps = {
  type?: WidgetCardType;
  widget: Widget;
  disabled?: boolean;
  dispatches: DispatchesType;
};
