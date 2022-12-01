import { useEffect, useState } from 'react';

import { Hook, Owner } from '@sam/types';

import {
  SharingModalHandlers,
  SharingModalProps,
  SharingModalState,
} from './sharing-modal.definition';

export const useSharingModal = (
  allUsers: SharingModalProps['allUsers'],
  checkedUsers: SharingModalProps['checkedUsers'],
  dispatches: SharingModalProps['dispatches'],
  onClose: SharingModalProps['onClose']
): Hook<SharingModalState, SharingModalHandlers> => {
  const { onEdit } = dispatches;

  const [state, setState] = useState<SharingModalState>({
    checked: [],
  });

  const isSuccess = (result: boolean) => {
    setState((prev) => ({ ...prev, isProcessing: false }));
    onClose();
  };

  const onChecked: SharingModalHandlers['onChecked'] = ({
    checked,
    value: id,
  }) => {
    const isInState = state.checked.some((user) => user.id === id);

    if (!isInState && checked) {
      const checkedState = [...state.checked];
      const userIndex = allUsers.findIndex((item) => item.id === id);
      checkedState.push(allUsers[userIndex]);

      setState((prev) => ({
        ...prev,
        checked: checkedState,
      }));
    }

    if (isInState && !checked) {
      const checkedState = [...state.checked];
      const index = checkedState.findIndex((item) => item.id === id);
      checkedState.splice(index, 1);

      setState((prev) => ({
        ...prev,
        checked: checkedState,
      }));
    }
  };

  const onSubmit: SharingModalHandlers['onSubmit'] = (e) => {
    e.stopPropagation();
    e.preventDefault();
    onEdit(state.checked, isSuccess);
  };

  useEffect(() => {
    const checked: Owner[] = [];
    allUsers.forEach((user) => {
      if (checkedUsers.some((checkedUser) => checkedUser.id === user.id)) {
        checked.push(user);
      }
    });

    setState((prev) => ({ ...prev, checked }));
  }, []);

  return {
    state,
    handlers: {
      onChecked,
      onSubmit,
    },
  };
};
