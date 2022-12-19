import { css, theme } from 'twind/css';

export const WidgetRendererCss = css({
  '&': {},
});

export const PlaceholderCss = css({
  '&': {
    position: 'relative',
    padding: theme('spacing.16'),
  },
});

export const ImageWidgetCss = css({
  '&': {
    minWidth: theme('spacing.208'),
    minHeight: theme('spacing.208'),
  },
});

export const ButtonBoxCss = css({
  '&': {
    position: 'absolute',
    right: '-12px',
    top: '-16px',
    display: 'flex',
    backgroundColor: '#38bdf840',
    gap: theme('spacing.8'),
    padding: theme('spacing.8'),
    borderRadius: theme('spacing.8'),

    '& > button': {
      backdropFilter: 'opacity(0.5)',
    },
  },
});

export const ColourRedCss = css({
  '&': {
    color: theme('colors.red.500'),

    '& path': {
      fill: theme('colors.red.500'),
    },
  },
});

export const TextDisplayCss = css({
  '&': {
    width: '100%',
    display: 'flex',
    paddingLeft: theme('spacing.16'),
    paddingRight: theme('spacing.16'),
    gap: theme('spacing.8'),
    alignItems: 'baseline',
    justifyContent: 'flex-start',
  },
});

export const CategoryCss = css({
  '&': {
    alignItems: 'flex-start',
    backgroundColor: theme('colors.neutral.50'),
    paddingTop: theme('spacing.8'),
    paddingRight: theme('spacing.16'),
    paddingBottom: theme('spacing.4'),
    paddingLeft: theme('spacing.16'),
    borderRadius: theme('spacing.8'),
    borderStyle: 'solid',
    borderWidth: theme('spacing.2'),
    borderColor: theme('colors.neutral.200'),
  },
});

export const DescriptionCss = css({
  '&>p': {
    backgroundColor: theme('colors.neutral.50'),
    padding: theme('spacing.16'),
    borderRadius: theme('spacing.8'),
  },

  '@screen sm': {
    height: '100%',
    width: '100%',
  },
});

export const ImageCss = css({
  '&': {
    height: '100%',
  },
});

export const PriceCss = css({
  '&': {},
});

export const ShopNameCss = css({
  '&': {},
});

export const URLCss = css({
  '&': {
    width: '100%',
  },
});
