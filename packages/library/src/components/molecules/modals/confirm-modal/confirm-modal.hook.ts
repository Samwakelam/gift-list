import { useState } from 'react';

import { Hook } from '@sam/types';
import { FillType } from '@sam/icons';

import { ButtonProps, ButtonVariant } from '../../../atoms';

import {
  ConfirmModalHandlers,
  ConfirmModalProps,
  ConfirmModalState,
  ConfirmModalType,
} from './confirm-modal.definition';

export const useConfirmModal = (
  item: ConfirmModalProps['entity'],
  type: ConfirmModalProps['type'],
  dispatches: ConfirmModalProps['dispatches'],
  onClose: ConfirmModalProps['onClose']
): Hook<ConfirmModalState, ConfirmModalHandlers> => {
  const { onRemove } = dispatches;

  const [state, setState] = useState<ConfirmModalState>({
    isProcessing: false,
  });

  const isSuccess = (result: boolean) => {
    setState((prev) => ({ ...prev, isProcessing: false }));
    onClose();
  };

  const deleteEntity = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();

    setState((prev) => ({ ...prev, isProcessing: true }));
    onRemove(item._id, isSuccess);
  };

  const resolveConfirmButton = (): ButtonProps => {
    switch (type) {
      case ConfirmModalType.DELETE: {
        return {
          children: 'Delete',
          startIcon: {
            icon: 'bin',
            ariaLabel: 'delete',
            fill: FillType.OUTLINE,
          },
          onClick: (e) => deleteEntity(e),
        };
      }
    }
  };

  const resolveDeclineButton = (): ButtonProps => {
    switch (type) {
      case ConfirmModalType.DELETE: {
        return {
          children: 'Cancel',
          buttonVariant: ButtonVariant.TERTIARY,
          onClick: (e) => {
            e.preventDefault();
            e.stopPropagation();
            onClose();
          },
        };
      }
    }
  };

  return {
    state,
    handlers: { resolveConfirmButton, resolveDeclineButton },
  };
};
