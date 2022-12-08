import { Entity } from './entity.type';
import { Owner } from './owner.type';

export interface Gift extends Entity {
  image?: Record<string, unknown>;
  price?: number;
  shopName?: string;
  url?: string;
  properties: {
    purchased: boolean;
    purchasedBy: Owner;
    watching: Owner[];
  };
}
