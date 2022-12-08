import { DispatchesType, Gift, List, Workshop } from '@sam/types';

import { MenuDropdownProps } from '../../../atoms';

export type MoreMenuProps = {
  entity: List | Workshop | Gift | Omit<Gift, 'id'>;
  menuConfig?: Omit<MenuDropdownProps, 'menuItems'>;
  dispatches: DispatchesType;
};
