import React from 'react';
import { useSelect } from 'react-cosmos/fixture';

import { EntityModal, EntityModalType, Modal } from '../../../../src';
import { mockListData } from '../../../../__synthetic__/list.data';
import { mockWorkshopData } from '../../../../__synthetic__/workshop.data';

export default {
  ['Create']: () => {
    return (
      <Modal isOpen={true} onRequestClose={() => {}} modalTitle="Create Entity">
        <EntityModal
          type={EntityModalType.CREATE}
          entity={null}
          dispatches={{}}
          onClose={() => {}}
        />
      </Modal>
    );
  },
  ['Edit']: () => {
    const [entityType] = useSelect('entityType', {
      options: ['Workshop', 'List'],
    });

    const entity = {
      Workshop: {
        ...mockWorkshopData,
        visibility: {
          isVisible: true,
          sharedWith: [],
        },
      },
      List: mockListData,
    };

    const modalTitle = {
      Workshop: 'Edit Workshop',
      List: 'Edit List',
    };

    return (
      <Modal
        isOpen={true}
        onRequestClose={() => {}}
        modalTitle={modalTitle[entityType]}
      >
        <EntityModal
          type={EntityModalType.EDIT}
          entity={entity[entityType]}
          dispatches={{}}
          onClose={() => {}}
        />
      </Modal>
    );
  },
};
