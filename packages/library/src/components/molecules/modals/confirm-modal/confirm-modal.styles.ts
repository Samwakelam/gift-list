import { css, theme } from 'twind/css';

export const ConfirmModalCss = css({
  '&': {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    gap: theme('spacing.24'),
    textAlign: 'center',
  },
});

export const ButtonBoxCss = css({
  '&': {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    gap: theme('spacing.16'),
    width: '100%',
  },
  '@screen sm': {
    flexFlow: 'row',
  },
});
