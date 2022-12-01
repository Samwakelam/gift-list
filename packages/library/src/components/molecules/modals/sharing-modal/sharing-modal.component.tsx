import { ReactElement } from 'react';
import { tw } from 'twind';

import { CheckboxGroup } from '../../../../forms';
import { Button, UserImage } from '../../../atoms';

import { SharingModalProps } from './sharing-modal.definition';
import { useSharingModal } from './sharing-modal.hook';

import * as S from './sharing-modal.styles';

export const SharingModal = ({
  allUsers,
  checkedUsers,
  dispatches,
  onClose,
}: SharingModalProps): ReactElement<SharingModalProps> => {
  const {
    state,
    handlers: { onChecked, onSubmit },
  } = useSharingModal(allUsers, checkedUsers, dispatches, onClose);

  return (
    <div className={tw(S.SharingModalCss)}>
      <ul className={tw(S.UserListCss)}>
        {allUsers.map((user) => {
          return (
            <li key={user.id} className={tw(S.ListItemCss)}>
              <UserImage
                src={user.image}
                grayscale={!state.checked.includes(user)}
              />

              <CheckboxGroup
                labelText={user.name}
                value={user.id}
                onChecked={onChecked}
                checked={state.checked.includes(user)}
              />
            </li>
          );
        })}
      </ul>
      <Button onClick={(e) => onSubmit(e)}>Update</Button>
    </div>
  );
};
