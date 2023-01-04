import { Owner } from '@sam/types';

import { WorkshopManager } from '../../src';
import { mockOwnerData } from '../../__synthetic__/owner.data';

const WorkshopManagerFixture = () => {
  return <WorkshopManager user={mockOwnerData[0] as never as Owner} />;
};

export default WorkshopManagerFixture;
