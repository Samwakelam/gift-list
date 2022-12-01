import { css, theme } from 'twind/css';

export const SharingModalCss = css({
  '&': {
    display: 'flex',
    flexFlow: 'column',
    gap: theme('spacing.16'),
    alignItems: 'flex-end',
  },
});

export const UserListCss = css({
  '&': {
    listStyleType: 'none',
    margin: 0,
    width: '100%',
    display: 'flex',
    flexFlow: 'column',
    paddingLeft: theme('spacing.0'),
  },
  '@screen sm': {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    paddingLeft: theme('spacing.40'),
  },
});

export const ListItemCss = css({
  '&': {
    display: 'flex',
    alignItems: 'center',
    gap: theme('spacing.16'),
    position: 'relative',
    marginBottom: theme('spacing.8'),
  },
});

export const UserNameCss = css({
  '&': {
    textAlign: 'center',
    textTransform: 'capitalize',
  },
});
