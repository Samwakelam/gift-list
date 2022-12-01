import { Workshop, List, Owner } from '@sam/types';
import { ReactElement } from 'react';

export type TopBarProps = {
  entity: Workshop | List | Owner | null;
  children?: ReactElement;
  menu?: ReactElement;
};
