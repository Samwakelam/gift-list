import { css, CSSRules, Directive, keyframes, theme } from 'twind/css';

const Spin = keyframes({
  from: {
    transform: 'rotate(0deg)',
  },
  to: {
    transform: 'rotate(360deg)',
  },
});

export const GiftBuilderStyle = ``;

export const GiftBuilderCss: Directive<CSSRules> = css({
  '&': {
    height: '100vh',
    display: 'flex',
  },
});

export const ContentContainerCss: Directive<CSSRules> = css({
  '&': {
    backgroundColor: theme('colors.neutral.100'),
    flexGrow: 1,
    display: 'flex',
    flexFlow: 'column',
  },
});

export const SavingContainerCss = css({
  '&': {
    display: 'flex',
    flexFlow: 'row',
    gap: theme('spacing.8'),
    alignItems: 'center',
  },
});

export const SavingContainerSavedCss = css({
  '& h5': {
    color: theme('colors.green.600'),
  },

  '& path': {
    fill: theme('colors.green.600'),
  },
});

export const SavingContainerSavingCss = css({
  '& h5': {
    color: theme('colors.neutral.900'),
  },

  '& svg': {
    animation: `1s linear infinite`,
    animationName: Spin,
    height: theme('spacing.20'),
    width: theme('spacing.20'),
  },

  '& path': {
    fill: theme('colors.neutral.900'),
  },
});

export const SavingContainerUnsavedCss = css({
  '& h5': {
    color: theme('colors.orange.400'),
  },

  '& path': {
    fill: theme('colors.orange.400'),
  },
});

export const GiftContainerCss: Directive<CSSRules> = css({
  '&': {
    height: '100%',
    padding: theme('spacing.16'),
    display: 'grid',
    gridAutoFlow: 'dense',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(4, 85px)',
    backgroundColor: theme('colors.neutral.100'),
    gap: theme('spacing.24'),
    overflow: 'auto',
  },

  '@screen sm': {
    padding: theme('spacing.32'),
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(6, 85px)',
  },

  '@screen md': {
    padding: theme('spacing.56'),
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateRows: 'repeat(5, 85px)',
  },

  '@screen lg': {
    padding: theme('spacing.64'),
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridTemplateRows: 'repeat(4, 85px)',
  },

  '@screen xl': {
    padding: theme('spacing.64'),
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridTemplateRows: 'repeat(4, 85px)',
  },

  '@screen 2xl': {
    padding: theme('spacing.64'),
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridTemplateRows: 'repeat(4, 85px)',
  },
});
