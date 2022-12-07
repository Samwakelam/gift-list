import { ReactElement } from 'react';
import { tw } from 'twind';

import { PlaceholderProps } from './placeholder.definition';

import * as S from './placeholder.styles';

export const Placeholder = ({
    children,
}: PlaceholderProps): ReactElement<PlaceholderProps> => {
    return (
        <div className={tw(S.PlaceholderCss, S.PlaceholderStyles)}>
            {children}
        </div>
    );
};
