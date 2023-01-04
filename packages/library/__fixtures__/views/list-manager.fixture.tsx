import { Workshop } from '@sam/types';

import { ListManager } from '../../src';
import { mockWorkshopData } from '../../__synthetic__/workshop.data';

const ListManagerFixture = () => {
  return <ListManager workshop={mockWorkshopData as never as Workshop} />;
};

export default ListManagerFixture;
