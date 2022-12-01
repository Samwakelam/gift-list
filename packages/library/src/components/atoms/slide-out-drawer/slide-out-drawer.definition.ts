import { ReactElement } from 'react';

export type SlideOutDrawerProps = {
  drawerTitle?: string;
  children: ReactElement;
  isOpen: boolean;
  onRequestClose: () => void;
};
