import { ReactElement } from 'react';
import { tw } from 'twind';

import { InputGroup } from '../../../../forms';
import { Button } from '../../../atoms';

import { AddConnectionModalProps } from './add-connection-modal.definition';
import { useAddConnectionModal } from './add-connection-modal.hook';

import * as S from './add-connection-modal.styles';

export const AddConnectionModal = ({
  onClose,
}: AddConnectionModalProps): ReactElement<AddConnectionModalProps> => {
  const {
    state: { addConnectionInput },
    handlers: { onSubmit },
  } = useAddConnectionModal(onClose);

  return (
    <div className={tw(S.AddConnectionModalCss)}>
      <InputGroup
        label="add-connection-input"
        labelText="Connection code"
        name="add-connection"
        showLabel
        {...addConnectionInput}
      />
      <Button onClick={(e) => onSubmit(e)}>Submit</Button>
    </div>
  );
};
