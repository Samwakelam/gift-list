import { Workshop } from './workshop.type';

export interface Owner {
  id: string;
  name: string;
  image: string | null;
  workshops: Workshop[];
  connections: Owner[];
}
