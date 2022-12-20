import React from 'react';
import { WorkshopManager } from '../../src';
import { mockOwnerData } from '../../__synthetic__/owner.data';

const WorkshopManagerFixture = () => {
  return <WorkshopManager userId={mockOwnerData[0].id} />;
};

export default WorkshopManagerFixture;
