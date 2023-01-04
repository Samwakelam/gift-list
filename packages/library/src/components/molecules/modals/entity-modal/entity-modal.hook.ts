import { useState } from 'react';

import { Entity, Hook } from '@sam/types';

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
    'toggle-share': {
      name: 'toggle-share',
      active: false,
    },
    'toggle-visibility': {
      name: 'toggle-visibility',
      active: false,
    },
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
    e.preventDefault();
    e.stopPropagation();
    setState((prev) => ({ ...prev, isProcessing: true }));

    if (nameInput.state.value === '') {
      setState((prev) => ({ ...prev, isProcessing: false }));
      return;
    }

    let description: string | null = descriptionInput.state.value;
    if (description === '') {
      description = null;
    }

    const name = nameInput.state.value;

    const entity: Omit<Entity, '_id'> = {
      name,
      lookupKey: '',
      createdAt: new Date(),
      description,
      visibility: {
        isVisible: state['toggle-visibility'].active,
        sharedWith: [],
      },
    };

    onAdd({ entity, allShare: state['toggle-share'].active }, isSuccess);
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

  const onToggle: EntityModalHandlers['onToggle'] = (e) => {
    const dataset = e.current?.dataset;

    if (
      dataset &&
      dataset.name === state['toggle-share'].name &&
      dataset.active
    ) {
      const active = dataset.active ? JSON.parse(dataset.active) : false;
      setState((prev) => ({
        ...prev,
        'toggle-share': { name: dataset.name!, active },
      }));
    }

    if (
      dataset &&
      dataset.name === state['toggle-visibility'].name &&
      dataset.active
    ) {
      const active = dataset.active ? JSON.parse(dataset.active) : false;
      setState((prev) => ({
        ...prev,
        'toggle-visibility': { name: dataset.name!, active },
      }));
    }
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
    handlers: { resolveButtonType, onToggle },
  };
};
