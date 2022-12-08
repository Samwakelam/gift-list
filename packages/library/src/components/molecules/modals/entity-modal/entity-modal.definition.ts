import { DispatchesType, Gift, Hook, List, Workshop } from '@sam/types';
import React from 'react';

import {
  InputGroupHandlers,
  InputGroupState,
  ToggleProps,
} from '../../../../forms';
import { ButtonProps } from '../../../atoms';

export enum EntityModalType {
  CREATE = 'create',
  EDIT = 'edit',
}

export type EntityModalProps = {
  type: EntityModalType;
  entity: List | Workshop | Gift | Omit<Gift, 'id'> | null;
  dispatches: DispatchesType;
  onClose: () => void;
};

export type EntityModalState = {
  entity: List | Workshop | Gift | null;
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
