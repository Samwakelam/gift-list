import { css, theme } from 'twind/css';

export const HideAndRevealCss = css({
  '&': {
    backgroundColor: theme('colors.neutral.50'),
    borderRadius: theme('spacing.4'),
    paddingTop: theme('spacing.16'),
    paddingBottom: theme('spacing.16'),
    paddingLeft: theme('spacing.32'),
    paddingRight: theme('spacing.16'),
    width: '100%',
  },
});

export const ContentCss = css({
  '&': {
    display: 'flex',
    gap: theme('spacing.8'),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
