import { ReactElement, useState } from 'react';
import { tw } from 'twind';

import { FillType } from '@sam/icons';

import {
  Button,
  ButtonVariant,
  DirectionType,
  Tooltip,
  SizeType,
} from '../../../../components';

import { HideAndRevealProps } from './hide-and-reveal.definition';

import * as S from './hide-and-reveal.styles';

export const HideAndReveal = ({
  coverElement,
  hiddenElement,
}: HideAndRevealProps): ReactElement<HideAndRevealProps> => {
  const [showCode, setShowCode] = useState<boolean>(false);

  return (
    <div className={tw(S.HideAndRevealCss)}>
      {showCode ? (
        <div className={tw(S.ContentCss)}>
          {hiddenElement}
          <Button
            icon={{
              icon: 'eye-on',
              ariaLabel: 'view',
              fill: FillType.SOLID,
            }}
            buttonVariant={ButtonVariant.SECONDARY}
            onClick={() => setShowCode(false)}
          />
        </div>
      ) : (
        <div className={tw(S.ContentCss)}>
          {coverElement}
          <Tooltip
            content="Share this code with people you know"
            direction={DirectionType.LEFT}
            size={SizeType.L}
          >
            <Button
              icon={{
                icon: 'eye-on',
                ariaLabel: 'view',
                fill: FillType.OUTLINE,
              }}
              buttonVariant={ButtonVariant.SECONDARY}
              onClick={() => setShowCode(true)}
            />
          </Tooltip>
        </div>
      )}
    </div>
  );
};
