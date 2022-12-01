import { css, theme } from 'twind/css';

export const OwnerProfileCss = css({
  '&': {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    gap: theme('spacing.24'),
    marginTop: theme('spacing.16'),
  },
});

export const UserIdCss = css({
  '&': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
});

export const UserListCss = css({
  '&': {
    listStyleType: 'none',
    margin: 0,
    marginTop: theme('spacing.40'),
    width: '100%',
    paddingLeft: theme('spacing.12'),
  },
  '@screen sm': {
    paddingLeft: theme('spacing.40'),
  },
});

export const ListItemCss = css({
  '&': {
    display: 'flex',
    alignItems: 'center',
    gap: theme('spacing.16'),
    position: 'relative',
    marginBottom: theme('spacing.16'),
  },
  '&>button': {
    height: theme('spacing.40'),
    width: theme('spacing.40'),
  },
});

export const UserNameCss = css({
  '&': {
    textAlign: 'center',
    textTransform: 'capitalize',
  },
});
