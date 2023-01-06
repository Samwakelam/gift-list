import { useState } from 'react';

import { Hook, isList, isWorkshop } from '@sam/types';

import {
  EntityCardState,
  EntityCardHandlers,
  EntityCardProps,
} from './entity-card.definition';

export const useEntityCard = (
  entity: EntityCardProps['entity'],
  dispatches: EntityCardProps['dispatches']
): Hook<EntityCardState, EntityCardHandlers> => {
  const { onEdit } = dispatches;

  const [state, setState] = useState<EntityCardState>({
    isModalOpen: false,
  });

  const onEditVisibility: EntityCardHandlers['onEditVisibility'] = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const _entity = {
      ...entity,
      visibility: {
        ...entity.visibility,
        isVisible: !entity.visibility.isVisible,
      },
    };

    onEdit(_entity, (result: boolean) => {});
  };

  const onEditSharing: EntityCardHandlers['onEditSharing'] = (
    checked,
    isSuccess
  ) => {
    const _entity = {
      ...entity,
      visibility: { ...entity.visibility, sharedWith: checked },
    };

    onEdit(_entity, isSuccess);
  };

  const resolveModal: EntityCardHandlers['resolveModal'] = (isOpen) => {
    setState((prev) => ({ ...prev, isModalOpen: isOpen }));
  };

  const resolveLink: EntityCardHandlers['resolveLink'] = () => {
    // const router = useRouter();

    // if (isList(entity)) {
    //   return `${router.query.userId}/workshop/${router.query.workshopId}/list/${entity._id}`;
    // }

    // if (isWorkshop(entity)) {
    //   return `/${router.query.userId}/workshop/${entity._id}`;
    // }

    return '/';
  };

  return {
    state,
    handlers: { onEditVisibility, onEditSharing, resolveModal, resolveLink },
  };
};
