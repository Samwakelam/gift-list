import { ReactElement } from 'react';
import { tw } from 'twind';

import { Icon } from '@sam/icons';

import { Button, Placeholder } from '../../../atoms';

import { WidgetCardProps, WidgetCardType } from './widget-card.definition';

import * as S from './widget-card.styles';

export const WidgetCard = ({
  widget,
  type = WidgetCardType.ICON,
  disabled = false,
  dispatches,
}: WidgetCardProps): ReactElement<WidgetCardProps> => {
  const { name, description, thumbnail, icon } = widget;

  return (
    <div className={tw(S.WidgetCardCss, disabled && S.DisabledCss)}>
      {type === WidgetCardType.IMAGE && thumbnail && (
        <img className={tw(S.ImageCss)} src={thumbnail} alt={name} />
      )}
      {type === WidgetCardType.ICON && (
        <Placeholder className={tw(S.ImageCss, S.IconCss)}>
          <Icon {...icon} />
        </Placeholder>
      )}
      <div className={tw(S.ContentCss)}>
        <h3 className={tw(S.HeadingCss)}>{name}</h3>
        <p className={tw(S.DescriptionCss)}>{description}</p>
      </div>
      <Button
        startIcon={{ icon: 'plus', ariaLabel: 'add' }}
        onClick={() => dispatches.onAdd(widget, () => {})}
        disabled={disabled}
      >
        Add to gift
      </Button>
    </div>
  );
};
