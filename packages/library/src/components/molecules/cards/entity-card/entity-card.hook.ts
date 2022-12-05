import { Hook } from '@sam/types';
import { useState } from 'react';

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

    return {
        state,
        handlers: { onEditVisibility, onEditSharing, resolveModal },
    };
};
