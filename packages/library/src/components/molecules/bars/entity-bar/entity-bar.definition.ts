import { ReactElement } from 'react';

import { Workshop, List, Owner, DispatchesType, Gift } from '@sam/types';
import { MenuItemProps } from '../../../atoms';

export interface MenuItemsProps extends MenuItemProps {}

export type MenuProps = {
  dispatches: DispatchesType;
  menuItems?: MenuItemsProps;
};

export type EntityBarProps = {
  entity: Workshop | List | Owner | Omit<Gift, 'id'> | Gift;
  fullWidth?: boolean;
  children?: ReactElement | ReactElement[];
  menu?: MenuProps;
};
