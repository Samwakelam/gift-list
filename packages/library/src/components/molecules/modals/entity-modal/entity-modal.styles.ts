import { css, theme } from 'twind/css';

export const EntityModalCss = css({
    '&': {
        display: 'flex',
        flexFlow: 'column',
    },
    '@screen sm': {
        alignItems: 'flex-end',
    },
});

export const ToggleContainerCss = css({
    '&': {
        display: 'flex',
        flexFlow: 'column',
        gap: theme('spacing.16'),
        marginBottom: theme('spacing.32'),
        width: '100%',
    },
});

export const ToggleBoxCss = css({
    '&': {
        display: 'flex',
        alignItems: 'center',
        gap: theme('spacing.8'),
    },

    '&> div': {
        flex: '0 0 auto',
    },

    '& > p': {
        flex: '1 1 auto',
    },
});
