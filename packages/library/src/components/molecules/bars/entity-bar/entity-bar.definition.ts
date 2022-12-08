import { ReactElement } from 'react';

import { Workshop, List, Owner, DispatchesType, Gift } from '@sam/types';

export type EntityBarProps = {
  entity: Workshop | List | Owner | Omit<Gift, 'id'> | Gift | null;
  children?: ReactElement;
  menu?: { dispatches: DispatchesType };
  title?: string;
};
