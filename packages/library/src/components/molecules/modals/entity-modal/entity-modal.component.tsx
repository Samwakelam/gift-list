import { ReactElement } from 'react';
import { tw } from 'twind';

import { InputGroup, Toggle } from '../../../../forms';
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
      {entity === null && type === EntityModalType.CREATE && (
        <div className={tw(S.ToggleContainerCss)}>
          <div className={tw(S.ToggleBoxCss)}>
            <Toggle
              {...state['toggle-share']}
              onChange={(e) => handlers.onToggle(e)}
            />
            <p>Share with all available connections</p>
          </div>
          <div className={tw(S.ToggleBoxCss)}>
            <Toggle
              {...state['toggle-visibility']}
              onChange={(e) => handlers.onToggle(e)}
            />
            <p>Make initially visible</p>
          </div>
        </div>
      )}
      <Button {...handlers.resolveButtonType()} disabled={state.isProcessing}>
        {type === EntityModalType.CREATE ? 'Create' : 'Update'}
      </Button>
    </div>
  );
};
