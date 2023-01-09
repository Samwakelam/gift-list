import { ReactElement } from 'react';
import Link from 'next/link';
import { tw } from 'twind';

import { isList, isWorkshop, Owner } from '@sam/types';
import { FillType, Icon } from '@sam/icons';

import { getRelativeDateTime } from '../../../../helpers';
import {
  Alignment,
  Button,
  ButtonVariant,
  DirectionType,
  Modal,
  SizeType,
  Tooltip,
  UserImage,
} from '../../../atoms';

import { SharingModal } from '../../modals';
import { MoreMenu } from '../../menus';

import { useEntityCard } from './entity-card.hook';
import { EntityCardProps } from './entity-card.definition';

import * as S from './entity-card.styles';

export const EntityCard = ({
  entity,
  allUsers,
  dispatches,
}: EntityCardProps): ReactElement<EntityCardProps> => {
  const _isList = isList(entity);
  const _isWorkshop = isWorkshop(entity);

  const {
    state,
    handlers: { onEditVisibility, onEditSharing, resolveModal, resolveLink },
  } = useEntityCard(entity, dispatches);

  const resolveSharingList = (): JSX.Element[] => {
    const list = [];
    const connection = (connection: Owner) => {
      return (
        <UserImage
          key={`user-image-entity-card-${connection._id}`}
          src={connection.image}
          className={tw(S.IconButtonCss)}
          grayscale={!entity.visibility.isVisible}
        />
      );
    };

    if (entity.visibility.sharedWith.length > 3) {
      list.push(
        <Button
          className={tw(
            S.IconButtonCss,
            S.ButtonBorderCss,
            !entity.visibility.isVisible && S.ButtonBorderGrayCss
          )}
          icon={{ icon: 'more-h', ariaLabel: 'more' }}
          buttonVariant={ButtonVariant.SECONDARY}
          onClick={() => resolveModal(true)}
        />
      );
      for (let i = 0; i < 3; i++) {
        list.push(connection(entity.visibility.sharedWith[i]));
      }
    } else {
      entity.visibility.sharedWith.forEach((owner) =>
        list.push(connection(owner))
      );
    }

    return list;
  };

  return (
    <div className={tw(S.EntityCardCss)}>
      <div className={tw(S.ButtonBoxCss)}>
        {resolveSharingList()}
        <Tooltip
          content={`Choose which connections to share your ${
            _isList ? 'list' : 'workshop'
          } with`}
          direction={DirectionType.LEFT}
          size={SizeType.L}
        >
          <Button
            icon={{
              icon: 'person',
              ariaLabel: 'people shared with',
              fill: entity.visibility.isVisible
                ? FillType.SOLID
                : FillType.OUTLINE,
            }}
            buttonVariant={ButtonVariant.TERTIARY}
            className={tw(S.IconButtonCss)}
            onClick={() => resolveModal(true)}
          />
        </Tooltip>
        <Tooltip
          content={`${entity.visibility.isVisible ? 'Hide' : 'Show'} this ${
            _isList ? 'list' : 'workshop'
          } ${entity.visibility.isVisible ? 'from' : 'to'} everyone`}
          direction={DirectionType.LEFT}
          size={SizeType.L}
        >
          <Button
            icon={{
              icon: entity.visibility.isVisible ? 'eye-on' : 'eye-off',
              ariaLabel: 'visibility',
            }}
            buttonVariant={ButtonVariant.TERTIARY}
            className={tw(S.IconButtonCss)}
            onClick={(e) => onEditVisibility(e)}
          />
        </Tooltip>
      </div>

      <Link
        href={resolveLink()}
        className={tw(
          S.ContentCss,
          !entity.visibility.isVisible && S.ContentHiddenCss
        )}
      >
        <div className={tw(S.TitlesCss)}>
          <div>
            {_isList && (
              <Icon
                className={tw(S.IconCss)}
                icon="list-fave"
                ariaLabel="list"
                fill={
                  entity.visibility.isVisible
                    ? FillType.SOLID
                    : FillType.OUTLINE
                }
              />
            )}
            {_isWorkshop && (
              <Icon
                className={tw(S.IconCss)}
                icon="tree"
                ariaLabel="list"
                fill={
                  entity.visibility.isVisible
                    ? FillType.SOLID
                    : FillType.OUTLINE
                }
              />
            )}
            <h5>{entity.name}</h5>
          </div>
          {_isList && <h6>Number of gifts: {entity.gifts.length}</h6>}
          {_isWorkshop && <h6>Number of lists: {entity.lists.length}</h6>}
        </div>

        {entity.description && (
          <p className={tw(S.DescriptionCss)}>{entity.description}</p>
        )}

        <p className={tw(S.RelativeDateCss)}>
          <Icon icon="clock" ariaLabel="clock" fill={FillType.OUTLINE} />
          {getRelativeDateTime(entity.createdAt)}
        </p>
      </Link>

      <MoreMenu
        entity={entity}
        menuConfig={{ align: Alignment.RIGHT }}
        dispatches={dispatches}
      />
      <Modal
        isOpen={state.isModalOpen}
        onRequestClose={() => resolveModal(false)}
        modalTitle={_isWorkshop ? 'Workshop Sharing' : 'List Sharing'}
      >
        <SharingModal
          allUsers={allUsers}
          checkedUsers={entity.visibility.sharedWith}
          dispatches={{ onEdit: onEditSharing }}
          onClose={() => resolveModal(false)}
        />
      </Modal>
    </div>
  );
};
