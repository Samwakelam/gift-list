import { Gift, Hook, List, Workshop } from '@sam/types';
import React from 'react';

import {
  InputGroupHandlers,
  InputGroupState,
  ToggleProps,
} from '../../../../forms';
import { ButtonProps, ModalChildProps } from '../../../atoms';

export enum EntityModalType {
  CREATE = 'create',
  EDIT = 'edit',
}

export interface EntityModalProps extends ModalChildProps {
  type: EntityModalType;
  entity: List | Workshop | Gift | Omit<Gift, 'id'> | null;
}

export type EntityModalState = {
  entity: List | Workshop | Gift | Omit<Gift, 'id'> | null;
  isProcessing: boolean;
  nameInput: Hook<InputGroupState, InputGroupHandlers>;
  descriptionInput: Hook<InputGroupState, InputGroupHandlers>;
  'toggle-share': Omit<ToggleProps, 'onChange'>;
  'toggle-visibility': Omit<ToggleProps, 'onChange'>;
};

export type EntityModalHandlers = {
  resolveButtonType: () => ButtonProps;
  onToggle: (e: React.RefObject<HTMLSpanElement>) => void;
};
