import { css, CSSRules, Directive, theme } from 'twind/css';

export const ListBuilderStyle = ``;

export const ListBuilderCss: Directive<CSSRules> = css({
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

export const ListContainerCss: Directive<CSSRules> = css({
  '&': {
    padding: theme('spacing.32'),
    display: 'flex',
    flexFlow: 'column',
    gap: theme('spacing.24'),
    overflow: 'auto',
  },
  '@screen sm': {
    padding: theme('spacing.64'),
  },
});

export const PlaceholderCss = css({
  '&': {
    height: theme('spacing.208'),
  },
});
