import { ReactElement, useRef, useState } from 'react';
import { tw } from 'twind';

import { FillType } from '@sam/icons';

import {
  AddConnectionModal,
  Button,
  ButtonVariant,
  Modal,
  NoResults,
  UserImage,
} from '../../../../components';

import { DeleteUserModal } from '../delete-user-modal.component';
import { HideAndReveal } from '../hide-and-reveal/hide-and-reveal.component';

import { OwnerProfileProps } from './owner-profile.definition';

import * as S from './owner-profile.styles';

export const OwnerProfile = ({
  owner,
  users,
}: OwnerProfileProps): ReactElement<OwnerProfileProps> => {
  const { _id } = owner;

  const userRef = useRef<HTMLParagraphElement>(null);

  const [isConnectionModalOpen, setIsConnectionModalOpen] =
    useState<boolean>(false);

  const onCopyCode = () => {
    const innerHtml = userRef.current?.innerHTML;

    if (innerHtml) {
      navigator.clipboard.writeText(innerHtml);
    }
  };

  return (
    <div className={tw(S.OwnerProfileCss)}>
      <HideAndReveal
        coverElement={
          <div>
            <p>Your connection code:</p>
          </div>
        }
        hiddenElement={
          <div className={tw(S.UserIdCss)}>
            <p ref={userRef}>{_id}</p>
            <Button
              icon={{
                icon: 'copy',
                ariaLabel: 'copy',
                fill: FillType.OUTLINE,
              }}
              buttonVariant={ButtonVariant.SECONDARY}
              onClick={() => onCopyCode()}
              // onBlur={(e) => {

              // }}
            />
          </div>
        }
      />

      {users.length > 0 ? (
        <ul className={tw(S.UserListCss)}>
          {users.map((user) => {
            return (
              <li key={user._id} className={tw(S.ListItemCss)}>
                <UserImage src={user.image} />
                <p className={tw(S.UserNameCss)}>{user.name}</p>
                <DeleteUserModal user={user} />
              </li>
            );
          })}

          <li className={tw(S.ListItemCss)}>
            <Button
              icon={{ icon: 'plus', ariaLabel: 'plus' }}
              buttonVariant={ButtonVariant.SECONDARY}
              onClick={() => setIsConnectionModalOpen(true)}
            />
            <p className={tw(S.UserNameCss)}>New Connection</p>
          </li>
        </ul>
      ) : (
        <NoResults
          title="No Connections"
          description="Add connections with users you want to share your lists and workshops with"
        >
          <Button
            startIcon={{ icon: 'plus', ariaLabel: 'add' }}
            onClick={() => setIsConnectionModalOpen(true)}
          >
            Connection
          </Button>
        </NoResults>
      )}
      <Modal
        isOpen={isConnectionModalOpen}
        onRequestClose={() => setIsConnectionModalOpen(false)}
      >
        <AddConnectionModal onClose={() => setIsConnectionModalOpen(false)} />
      </Modal>
    </div>
  );
};
