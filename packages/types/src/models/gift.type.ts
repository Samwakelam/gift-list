import { Entity } from './entity.type';

export interface Gift extends Entity {
  properties: Record<string, unknown>;
}
