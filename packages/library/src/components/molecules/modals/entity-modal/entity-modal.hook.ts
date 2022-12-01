import { useState } from 'react';

import { Entity, Hook, Workshop } from '@sam/types';

import { useInputGroup } from '../../../../forms';

import {
  EntityModalHandlers,
  EntityModalProps,
  EntityModalState,
  EntityModalType,
} from './entity-modal.definition';
import {
  EntityNameValidators,
  EntityDescriptionValidators,
} from './entity-modal.utils';

export const useEntityModal = (
  type: EntityModalProps['type'],
  entity: EntityModalProps['entity'],
  dispatches: EntityModalProps['dispatches'],
  onClose: EntityModalProps['onClose']
): Hook<EntityModalState, EntityModalHandlers> => {
  const { onAdd, onEdit } = dispatches;

  const [state, setState] = useState<
    Omit<EntityModalState, 'nameInput' | 'descriptionInput'>
  >({
    entity,
    isProcessing: false,
  });

  const nameInput = useInputGroup(
    entity ? entity.name : '',
    EntityNameValidators
  );

  const descriptionInput = useInputGroup(
    entity && entity.description !== null ? entity.description : '',
    EntityDescriptionValidators
  );

  const isSuccess = (result: boolean): void => {
    setState((prev) => ({ ...prev, isProcessing: false }));
    onClose();
  };

  const addEntity = (e: React.MouseEvent<HTMLButtonElement>): void => {
    if (nameInput.state.value === '') {
      return;
    }

    let description: string | null = descriptionInput.state.value;
    if (description === '') {
      description = null;
    }

    const name = nameInput.state.value;

    const entity: Omit<Entity, 'id'> = {
      name,
      lookupKey: '',
      createdAt: new Date(),
      description,
      visibility: {
        isVisible: false,
        sharedWith: [],
      },
    };

    onAdd(entity, isSuccess);
  };

  const editEntity = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setState((prev) => ({ ...prev, isProcessing: true }));

    if (nameInput.state.value === '') {
      return;
    }

    let description: string | null = descriptionInput.state.value;
    if (description === '') {
      description = null;
    }

    const name = nameInput.state.value;

    const editedEntity = {
      ...state.entity,
      name,
      description,
    };

    onEdit(editedEntity, isSuccess);
  };

  const resolveButtonType: EntityModalHandlers['resolveButtonType'] = () => {
    if (type === EntityModalType.CREATE) {
      return {
        children: 'Create',
        onClick: (e: React.MouseEvent<HTMLButtonElement>) => addEntity(e),
      };
    }

    if (type === EntityModalType.EDIT) {
      return {
        children: 'Update',
        onClick: (e: React.MouseEvent<HTMLButtonElement>) => editEntity(e),
      };
    }

    return {};
  };

  return {
    state: { ...state, nameInput, descriptionInput },
    handlers: { resolveButtonType },
  };
};
