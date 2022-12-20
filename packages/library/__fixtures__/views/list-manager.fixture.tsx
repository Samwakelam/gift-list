import React from 'react';

import { ListManager } from '../../src';
import { mockWorkshopData } from '../../__synthetic__/workshop.data';

const ListManagerFixture = () => {
  return <ListManager workshopId={mockWorkshopData.id} />;
};

export default ListManagerFixture;
