import { css, CSSRules, Directive, theme } from 'twind/css';

export const GiftBuilderStyle = ``;

export const GiftBuilderCss: Directive<CSSRules> = css({
  '&': {
    height: '100vh',
    display: 'flex',
    flexFlow: 'column',
  },
});

export const GiftContainerCss: Directive<CSSRules> = css({
  '&': {
    height: '100%',
    padding: theme('spacing.64'),
    display: 'flex',
    flexFlow: 'row',
    backgroundColor: theme('colors.neutral.100'),
    gap: theme('spacing.24'),
  },
});
