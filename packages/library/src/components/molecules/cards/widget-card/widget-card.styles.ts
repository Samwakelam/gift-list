import { css, theme } from 'twind/css';

export const WidgetCardCss = css({
  '&': {
    display: 'flex',
    flexFlow: 'column',
    gap: theme('spacing.24'),
    alignItems: 'stretch',
  },

  '@screen md': {
    display: 'flex',
    flexFlow: 'row',
    gap: theme('spacing.24'),
    alignItems: 'flex-start',
  },
});

export const DisabledCss = css({
  '& > div, & > img': {
    opacity: '50%',
    filter: 'grayscale(1)',
  },
});

export const IconCss = css({
  height: theme('spacing.96'),
});

export const ImageCss = css({
  '@screen sm': {
    height: theme('spacing.144'),
  },

  '@screen md': {
    width: theme('spacing.144'),
    height: theme('spacing.144'),
    flex: '0 0 auto',
  },
});

export const ContentCss = css({
  '&': {
    flex: 1,
    width: '100%',
  },
});

export const HeadingCss = css({
  '&': {},
});

export const DescriptionCss = css({
  '&': {
    color: theme('colors.neutral.500'),
  },
});
