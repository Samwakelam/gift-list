import { FillType } from '@sam/icons';
import { Widget } from '@sam/types';

export const widgets: Widget[] = [
  {
    name: 'image',
    key: 'image',
    description:
      'Add an image to your gift so buyers can see what they are looking for',
    thumbnail: './image.jpg',
    icon: { icon: 'camera', ariaLabel: 'camera', fill: FillType.SOLID },
    config: {
      mobile: {
        row: [
          {
            unit: 'span',
            value: 2,
          },
        ],
        column: [
          {
            unit: 'span',
            value: 3,
          },
        ],
        order: 1,
      },
      sm: {
        row: [
          {
            unit: 'span',
            value: 2,
          },
        ],
        column: [
          {
            unit: 'span',
            value: 2,
          },
        ],
        order: 1,
      },
      md: {
        row: [
          {
            unit: 'span',
            value: 3,
          },
        ],
        column: [
          {
            unit: 'span',
            value: 2,
          },
        ],
        order: 1,
      },
      lg: {
        row: [
          {
            unit: 'span',
            value: 3,
          },
        ],
        column: [
          {
            unit: 'span',
            value: 2,
          },
        ],
        order: 1,
      },
      xl: {
        row: [
          {
            unit: 'span',
            value: 3,
          },
        ],
        column: [
          {
            unit: 'span',
            value: 2,
          },
        ],
        order: 1,
      },
      '2xl': {
        row: [
          {
            unit: 'span',
            value: 3,
          },
        ],
        column: [
          {
            unit: 'span',
            value: 2,
          },
        ],
        order: 1,
      },
    },
  },
  {
    name: 'shop',
    key: 'shopName',
    description:
      'Where have you seen this gift item for buyers to easily source',
    thumbnail: './image.jpg',
    icon: { icon: 'house', ariaLabel: 'shop', fill: FillType.SOLID },
    config: {
      mobile: {
        row: [
          {
            unit: 'span',
            value: 1,
          },
        ],
        column: [
          {
            unit: 'span',
            value: 3,
          },
        ],
        order: 2,
      },
      sm: {
        row: [
          {
            unit: 'span',
            value: 1,
          },
        ],
        column: [
          {
            unit: 'span',
            value: 2,
          },
        ],
        order: 2,
      },
      md: {
        row: [
          {
            unit: 'span',
            value: 1,
          },
        ],
        column: [
          {
            unit: 'span',
            value: 2,
          },
        ],
        order: 2,
      },
      lg: {
        row: [
          {
            unit: 'span',
            value: 1,
          },
        ],
        column: [
          {
            unit: 'span',
            value: 2,
          },
        ],
        order: 2,
      },
      xl: {
        row: [
          {
            unit: 'span',
            value: 1,
          },
        ],
        column: [
          {
            unit: 'span',
            value: 2,
          },
        ],
        order: 2,
      },
      '2xl': {
        row: [
          {
            unit: 'span',
            value: 1,
          },
        ],
        column: [
          {
            unit: 'span',
            value: 2,
          },
        ],
        order: 2,
      },
    },
  },
  {
    name: 'price',
    key: 'price',
    description: 'How much does your gift cost',
    thumbnail: './image.jpg',
    icon: { icon: 'tag', ariaLabel: 'price', fill: FillType.SOLID },
    config: {
      mobile: {
        row: [
          {
            unit: 'span',
            value: 1,
          },
        ],
        column: [
          {
            unit: 'span',
            value: 3,
          },
        ],
        order: 2,
      },
      sm: {
        row: [
          {
            unit: 'span',
            value: 1,
          },
        ],
        column: [
          {
            unit: 'span',
            value: 1,
          },
        ],
        order: 3,
      },
      md: {
        row: [
          {
            unit: 'span',
            value: 1,
          },
        ],
        column: [
          {
            unit: 'span',
            value: 2,
          },
        ],
        order: 4,
      },
      lg: {
        row: [
          {
            unit: 'span',
            value: 1,
          },
        ],
        column: [
          {
            unit: 'span',
            value: 1,
          },
        ],
        order: 4,
      },
      xl: {
        row: [
          {
            unit: 'span',
            value: 1,
          },
        ],
        column: [
          {
            unit: 'span',
            value: 1,
          },
        ],
        order: 4,
      },
      '2xl': {
        row: [
          {
            unit: 'span',
            value: 1,
          },
        ],
        column: [
          {
            unit: 'span',
            value: 1,
          },
        ],
        order: 4,
      },
    },
  },
  {
    name: 'category',
    key: 'category',
    description: 'What category does your gift fall into',
    thumbnail: './image.jpg',
    icon: { icon: 'flag', ariaLabel: 'category', fill: FillType.SOLID },
    config: {
      mobile: {
        row: [
          {
            unit: 'span',
            value: 1,
          },
        ],
        column: [
          {
            unit: 'span',
            value: 3,
          },
        ],
        order: 2,
      },
      sm: {
        row: [
          {
            unit: 'span',
            value: 1,
          },
        ],
        column: [
          {
            unit: 'span',
            value: 1,
          },
        ],
        order: 3,
      },
      md: {
        row: [
          {
            unit: 'span',
            value: 1,
          },
        ],
        column: [
          {
            unit: 'span',
            value: 2,
          },
        ],
        order: 4,
      },
      lg: {
        row: [
          {
            unit: 'span',
            value: 1,
          },
        ],
        column: [
          {
            unit: 'span',
            value: 2,
          },
        ],
        order: 2,
      },
      xl: {
        row: [
          {
            unit: 'span',
            value: 1,
          },
        ],
        column: [
          {
            unit: 'span',
            value: 2,
          },
        ],
        order: 2,
      },
      '2xl': {
        row: [
          {
            unit: 'span',
            value: 1,
          },
        ],
        column: [
          {
            unit: 'span',
            value: 2,
          },
        ],
        order: 2,
      },
    },
  },
  {
    name: 'link',
    key: 'url',
    description: 'Can your gift be found online',
    thumbnail: './image.jpg',
    icon: { icon: 'link', ariaLabel: 'link', fill: FillType.SOLID },
    config: {
      mobile: {
        row: [
          {
            unit: 'span',
            value: 1,
          },
        ],
        column: [
          {
            unit: 'span',
            value: 3,
          },
        ],
        order: 2,
      },
      sm: {
        row: [
          {
            unit: 'span',
            value: 1,
          },
        ],
        column: [
          {
            unit: 'span',
            value: 1,
          },
        ],
        order: 3,
      },
      md: {
        row: [
          {
            unit: 'span',
            value: 1,
          },
        ],
        column: [
          {
            unit: 'span',
            value: 2,
          },
        ],
        order: 4,
      },
      lg: {
        row: [
          {
            unit: 'span',
            value: 1,
          },
        ],
        column: [
          {
            unit: 'span',
            value: 1,
          },
        ],
        order: 3,
      },
      xl: {
        row: [
          {
            unit: 'span',
            value: 1,
          },
        ],
        column: [
          {
            unit: 'span',
            value: 1,
          },
        ],
        order: 3,
      },
      '2xl': {
        row: [
          {
            unit: 'span',
            value: 1,
          },
        ],
        column: [
          {
            unit: 'span',
            value: 1,
          },
        ],
        order: 3,
      },
    },
  },
  {
    name: 'description',
    key: 'details',
    description:
      'Add any additional details to your gift like variations or sizes',
    thumbnail: './image.jpg',
    icon: { icon: 'blog', ariaLabel: 'description', fill: FillType.SOLID },
    config: {
      mobile: {
        row: [
          {
            unit: 'span',
            value: 3,
          },
        ],
        column: [
          {
            unit: 'span',
            value: 3,
          },
        ],
        order: 6,
      },
      sm: {
        row: [
          {
            unit: 'span',
            value: 3,
          },
        ],
        column: [
          {
            unit: 'span',
            value: 3,
          },
        ],
        order: 6,
      },
      md: {
        row: [
          {
            unit: 'span',
            value: 3,
          },
        ],
        column: [
          {
            unit: 'span',
            value: 2,
          },
        ],
        order: 3,
      },
      lg: {
        row: [
          {
            unit: 'span',
            value: 2,
          },
        ],
        column: [
          {
            unit: 'span',
            value: 3,
          },
        ],
        order: 4,
      },
      xl: {
        row: [
          {
            unit: 'span',
            value: 2,
          },
        ],
        column: [
          {
            unit: 'span',
            value: 3,
          },
        ],
        order: 4,
      },
      '2xl': {
        row: [
          {
            unit: 'span',
            value: 2,
          },
        ],
        column: [
          {
            unit: 'span',
            value: 3,
          },
        ],
        order: 4,
      },
    },
  },
];
