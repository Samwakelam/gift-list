import { css, CSSRules, Directive, theme } from 'twind/css';

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
  },
});

export const ListContainerCss: Directive<CSSRules> = css({
  '&': {
    padding: theme('spacing.64'),
    display: 'flex',
    flexFlow: 'column',
    gap: theme('spacing.24'),
  },
});
