import { Hook } from '@sam/types';
import { useState } from 'react';
import { FieldValidators, ValidationType, Validators } from '../../../../forms';
import { useInputGroup } from '../../../../forms/molecules/input-group/input-group.hook';
import { useWorkshopManager } from '../../../../views';

import {
  AddConnectionModalState,
  AddConnectionModalHandlers,
  AddConnectionModalProps,
} from './add-connection-modal.definition';

const validators: FieldValidators = [
  [
    (item: string) => item.length > 0,
    'Please enter a unique code for your connection',
  ],
  [Validators[ValidationType.GENERIC_STRING], 'This is not a valid code'],
];

export const useAddConnectionModal = (
  onClose: AddConnectionModalProps['onClose']
): Hook<AddConnectionModalState, AddConnectionModalHandlers> => {
  const {
    handlers: { addConnection },
  } = useWorkshopManager();

  const [state, setState] = useState<
    Omit<AddConnectionModalState, 'addConnectionInput'>
  >({});

  const addConnectionInput = useInputGroup('', validators);

  const isSuccess = (result: boolean): void => {
    onClose();
  };

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();

    const {
      state: {
        value,
        error: { hasError },
        isValid,
      },
    } = addConnectionInput;

    if (!hasError && isValid) {
      addConnection(value, isSuccess);
    }
  };

  return {
    state: {
      ...state,
      addConnectionInput,
    },
    handlers: { onSubmit },
  };
};
