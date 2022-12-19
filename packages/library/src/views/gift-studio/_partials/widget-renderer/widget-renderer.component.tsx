import { ReactElement } from 'react';
import { apply, tw } from 'twind';

import { FillType, Icon } from '@sam/icons';

import {
  Button,
  ButtonVariant,
  Modal,
  Placeholder,
} from '../../../../components';
import { computeStyles } from '../../../../utils';

import { useGiftStudio } from '../../gift-studio.view-model';

import { WidgetRendererProps } from './widget-renderer.definition';
import { useWidgetRenderer } from './widget-renderer.hook';
import { EditModal } from './edit-modal.component';

import * as S from './widget-renderer.styles';

export const WidgetRenderer = ({
  widget,
  value,
}: WidgetRendererProps): ReactElement<WidgetRendererProps> | null => {
  if (!widget) return null;

  const { config, icon, key } = widget;

  const { state, handlers } = useWidgetRenderer();

  const {
    state: {},
    handlers: { editGift, removeWidget },
  } = useGiftStudio();

  return (
    <>
      <Placeholder className={tw(S.PlaceholderCss, computeStyles(config))}>
        <div className={tw(S.ButtonBoxCss)}>
          <Button
            icon={{
              icon: 'bin',
              ariaLabel: 'delete',
              fill: FillType.SOLID,
            }}
            onClick={() => removeWidget(key, () => {})}
            buttonVariant={ButtonVariant.SECONDARY}
            className={tw(S.ColourRedCss)}
          />
          <Button
            icon={{ icon: 'pencil', ariaLabel: 'edit' }}
            onClick={() => handlers.onModalRequest(true)}
            buttonVariant={ButtonVariant.SECONDARY}
          />
        </div>

        {!value || value.length === 0 ? (
          <Icon {...icon} />
        ) : (
          resolveWidgetDisplay({ widget, value })
        )}
      </Placeholder>
      <Modal
        isOpen={state.editModalIsOpen}
        onRequestClose={() => handlers.onModalRequest(false)}
        modalTitle={`Edit ${widget.name}`}
      >
        <EditModal
          onClose={() => handlers.onModalRequest(false)}
          dispatches={{ onEdit: editGift }}
          widgetKey={key}
          value={value}
        />
      </Modal>
    </>
  );
};

const resolveWidgetDisplay = ({
  widget,
  value,
}: Required<WidgetRendererProps>): ReactElement => {
  switch (widget.key) {
    case 'category': {
      return (
        <div className={tw(apply(S.TextDisplayCss), S.CategoryCss)}>
          <Icon {...widget.icon} />
          <h4>{value}</h4>
        </div>
      );
    }
    case 'details': {
      return (
        <div className={tw(S.DescriptionCss)}>
          <Icon {...widget.icon} />

          <p>{value}</p>
        </div>
      );
    }
    case 'image': {
      return <img src={value} className={tw(S.ImageCss)} />;
    }
    case 'price': {
      return (
        <div className={tw(S.TextDisplayCss)}>
          <Icon {...widget.icon} />
          <h4>£{value}</h4>
        </div>
      );
    }
    case 'shopName': {
      return (
        <div className={tw(S.TextDisplayCss)}>
          <Icon {...widget.icon} />
          <h4>{value}</h4>
        </div>
      );
    }
    case 'url': {
      return (
        <Button onClick={() => alert(value)} className={tw(S.TextDisplayCss)}>
          Go to shop
        </Button>
      );
    }
    default: {
      return <></>;
    }
  }
};
