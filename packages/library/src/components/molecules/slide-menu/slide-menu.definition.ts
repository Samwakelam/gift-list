import { ReactElement } from 'react';
import { SlideMenuLinkProps } from '../../atoms';

export type SlideMenuProps = {
  subTitle: string;
  title: string;
  links: SlideMenuLinkProps[];
  isOpen: boolean;
  isFixed?: boolean;
  onRequestClose: () => void;
  children?: ReactElement;
};
