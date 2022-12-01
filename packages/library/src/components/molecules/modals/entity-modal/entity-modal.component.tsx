import { ReactElement } from 'react';
import { tw } from 'twind';

import { InputGroup } from '../../../../forms';
import { Button } from '../../../atoms';

import { EntityModalProps, EntityModalType } from './entity-modal.definition';
import { useEntityModal } from './entity-modal.hook';

import * as S from './entity-modal.styles';

export const EntityModal = ({
  type,
  entity,
  dispatches,
  onClose,
}: EntityModalProps): ReactElement<EntityModalProps> => {
  const { state, handlers } = useEntityModal(type, entity, dispatches, onClose);

  return (
    <div className={tw(S.EntityModalCss)}>
      <InputGroup
        label="entity-name"
        showLabel
        labelText="Name"
        name="entity-name"
        {...state.nameInput}
      />
      <InputGroup
        label="entity-description"
        showLabel
        labelText="Description"
        name="entity-name"
        {...state.descriptionInput}
      />
      <Button {...handlers.resolveButtonType()}>
        {type === EntityModalType.CREATE ? 'Create' : 'Update'}
      </Button>
    </div>
  );
};