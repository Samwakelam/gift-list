import { css, CSSRules, Directive, theme } from 'twind/css';

export const TopBarStyles = ``;

export const TopBarCss: Directive<CSSRules> = css({
  '&': {
    width: '100%',
    backgroundColor: theme('colors.neutral.50'),
    paddingTop: theme('spacing.56'),
    paddingBottom: theme('spacing.24'),
    paddingLeft: theme('spacing.32'),
    paddingRight: theme('spacing.32'),
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    borderBottomStyle: 'solid',
    borderBottomWidth: theme('spacing.2'),
    borderColor: theme('colors.neutral.200'),
  },
  '@screen sm': {
    flexFlow: 'row',
    alignItems: 'center',
    paddingTop: theme('spacing.20'),
    paddingBottom: theme('spacing.32'),
    paddingLeft: theme('spacing.88'),
    paddingRight: theme('spacing.56'),
  },
  '@screen md': {
    flexFlow: 'column',
    alignItems: 'flex-start',
    paddingTop: theme('spacing.32'),
    paddingBottom: theme('spacing.32'),
    paddingLeft: theme('spacing.56'),
    paddingRight: theme('spacing.56'),
  },
  '@screen lg': {
    paddingTop: theme('spacing.40'),
    paddingBottom: theme('spacing.40'),
    paddingLeft: theme('spacing.64'),
    paddingRight: theme('spacing.64'),
    flexFlow: 'row',
    alignItems: 'flex-end',
  },
});

export const HeadingCss: Directive<CSSRules> = css({
  '&': {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
  },
});

export const MenuContainerCss: Directive<CSSRules> = css({
  '&': {
    position: 'absolute',
    right: 0,
    top: '8px',
  },
  '@screen sm': {
    left: '-32px',
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
    width: 'unset',
    flex: 'unset',
    marginBottom: 'unset',
  },
  '@screen md': {
    marginBottom: theme('spacing.16'),
  },
  '@screen lg': {
    marginBottom: 'unset',
  },
});

export const ContentCss: Directive<CSSRules> = css({
  '&': {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  '@screen sm': {
    display: 'block',
    flex: 'unset',
  },
});
