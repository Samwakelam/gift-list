import { ReactElement } from 'react';

import { IconProps } from '@sam/icons';

export enum MenuDropdownType {
  MAIN = 'main',
  MINI = 'mini',
}

export enum Alignment {
  RIGHT = 'right',
  LEFT = 'left',
}

export enum ColourType {
  GREY = 'colors.neutral.700',
  ERROR = 'colors.red.600',
}

export type MenuItemProps = {
  text: string;
  icon?: IconProps;
  colour?: ColourType;
  isActive?: boolean;
  onClick?: () => void;
};

export type MenuDropdownProps = {
  menuItems: MenuItemProps[];
  trigger?: ReactElement;
  type?: MenuDropdownType;
  align?: Alignment;
};
