import { css, theme } from 'twind/css';

export const WidgetsCardDrawerCss = css({
  '&': {
    display: 'flex',
    flexFlow: 'column',
    gap: theme('spacing.16'),
  },
});

export const DrawerCss = css({
  '&': {
    width: '90%',
  },
  '@screen md': {
    width: '85%',
  },
});
