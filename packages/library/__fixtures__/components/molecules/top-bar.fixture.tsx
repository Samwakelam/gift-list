import React from 'react';
import { useSelect } from 'react-cosmos/fixture';

import { Bar, EntityBar } from '../../../src';

import { mockListData } from '../../../__synthetic__/list.data';
import { mockWorkshopData } from '../../../__synthetic__/workshop.data';

export default () => {
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
    List: {
      ...mockListData,
      visibility: {
        isVisible: true,
        sharedWith: [],
      },
    },
  };

  return (
    <Bar>
      <EntityBar entity={entity[entityType]} />
    </Bar>
  );
};
