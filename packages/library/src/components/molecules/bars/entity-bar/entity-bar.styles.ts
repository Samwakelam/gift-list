import { css, CSSRules, Directive, theme } from 'twind/css';

export const EntityBarStyles = ``;

export const EntityBarCss: Directive<CSSRules> = css({
  '&': {
    display: 'flex',
    flexFlow: 'column',
    width: '100%',
  },
  '@screen sm': {
    flexFlow: 'row',
    gap: theme('spacing.24'),
    alignItems: 'center',
  },
  '@screen md': {
    flexFlow: 'column',
    gap: theme('spacing.0'),
    alignItems: 'stretch',
  },
  '@screen lg': {
    flexFlow: 'row',
    gap: theme('spacing.24'),
    alignItems: 'center',
  },
});

export const TitlesCss: Directive<CSSRules> = css({
  '&': {
    flex: 0,
    marginBottom: theme('spacing.16'),
    width: '100%',
  },
  '& p': {
    marginBottom: theme('spacing.4'),
  },

  '@screen sm': {
    marginBottom: theme('spacing.0'),
  },

  '@screen md': {
    marginBottom: theme('spacing.16'),
  },

  '@screen lg': {
    marginBottom: theme('spacing.0'),
  },
});

export const HeadingCss: Directive<CSSRules> = css({
  '&': {
    display: 'flex',
    flexFlow: 'row-reverse',
    position: 'relative',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },

  '@screen sm': {
    flexFlow: 'row',
    justifyContent: 'unset',
  },
});

export const MenuBoxCss: Directive<CSSRules> = css({
  '@screen sm': {
    marginLeft: '-32px',
  },
});

export const ContentCss: Directive<CSSRules> = css({
  '&': {
    flex: 1,
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'stretch',
  },

  '@screen sm': {
    flexFlow: 'row',
    justifyContent: 'flex-end',
  },

  '@screen md': {
    flexFlow: 'column',
  },

  '@screen lg': {
    flexFlow: 'row',
  },
});
