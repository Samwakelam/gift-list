import {
  CameraIcon,
  CameraSolidIcon,
  FlagIcon,
  FlagSolidIcon,
  OrderIcon,
  OrderSolidIcon,
  ThumbDownIcon,
  ThumbDownSolidIcon,
  ThumbUpIcon,
  ThumbUpSolidIcon,
} from '../icons';

export type MiscType = 'camera' | 'flag' | 'order' | 'thumb-down' | 'thumb-up';

export const miscMap: { [key in MiscType]: () => JSX.Element } = {
  camera: CameraIcon,
  flag: FlagIcon,
  order: OrderIcon,
  'thumb-down': ThumbDownIcon,
  'thumb-up': ThumbUpIcon,
};

export const miscSolidMap: { [key in MiscType]: () => JSX.Element } = {
  camera: CameraSolidIcon,
  flag: FlagSolidIcon,
  order: OrderSolidIcon,
  'thumb-down': ThumbDownSolidIcon,
  'thumb-up': ThumbUpSolidIcon,
};
