import {
  CartIcon,
  CartSolidIcon,
  FolderSolidIcon,
  HalfStarIcon,
  HalfStarSolidIcon,
  HeartIcon,
  HeartSolidIcon,
  HouseIcon,
  HouseSolidIcon,
  PersonIcon,
  PersonSolidIcon,
  StarIcon,
  StarSolidIcon,
} from '../icons';

export type ShapesType =
  | 'cart'
  | 'folder'
  | 'half-star'
  | 'heart'
  | 'house'
  | 'person'
  | 'star';

export const shapesMap: { [key in ShapesType]: () => JSX.Element } = {
  cart: CartIcon,
  folder: FolderSolidIcon,
  'half-star': HalfStarIcon,
  heart: HeartIcon,
  house: HouseIcon,
  person: PersonIcon,
  star: StarIcon,
};

export const shapesSolidMap: { [key in ShapesType]: () => JSX.Element } = {
  cart: CartSolidIcon,
  folder: FolderSolidIcon,
  'half-star': HalfStarSolidIcon,
  heart: HeartSolidIcon,
  house: HouseSolidIcon,
  person: PersonSolidIcon,
  star: StarSolidIcon,
};
