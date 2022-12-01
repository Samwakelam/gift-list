import { DispatchesType, List, Workshop } from '@sam/types';

import { MenuDropdownProps } from '../../../atoms';

export type MoreMenuProps = {
  entity: List | Workshop;
  menuConfig?: Omit<MenuDropdownProps, 'menuItems'>;
  dispatches: DispatchesType;
};
