import { ReactElement } from 'react';

import { Button, ModalChildProps } from '../../../../components';
import { InputGroup, InputGroupProps, useInputGroup } from '../../../../forms';

export interface EditModalProps extends ModalChildProps {
  widgetKey: string;
  value?: string;
}

export const EditModal = ({
  widgetKey,
  value,
  onClose,
  dispatches,
}: EditModalProps): ReactElement<EditModalProps> => {
  const { onEdit } = dispatches;

  const inputGroup = useInputGroup(value ?? '', [
    [(value: string) => value.length > 0, 'Please provide a value'],
  ]);

  const isSuccess = (result: boolean) => {
    onClose();
  };

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const value = inputGroup.state.value;

    onEdit({ widgetKey, value }, isSuccess);
  };

  const resolveInputGroup = (): Pick<
    InputGroupProps,
    'labelText' | 'showLabel' | 'placeholder'
  > => {
    switch (widgetKey) {
      case 'category': {
        return {
          labelText: 'Category',
          showLabel: true,
          placeholder: 'Category',
        };
      }
      case 'description': {
        return {
          labelText: 'Description',
          showLabel: true,
          placeholder: 'Add a description',
        };
      }
      case 'image': {
        return {
          labelText: 'Image Address',
          showLabel: true,
          placeholder: 'URL for image location',
        };
      }
      case 'price': {
        return {
          labelText: 'Price',
          showLabel: true,
          placeholder: 'Please enter in 0.00 format',
        };
      }
      case 'shopName': {
        return {
          labelText: 'Shop Name',
          showLabel: true,
          placeholder: 'Name for shopping location',
        };
      }
      case 'url': {
        return {
          labelText: 'Link Address',
          showLabel: true,
          placeholder: 'https://example.com',
        };
      }
      default: {
        return {
          labelText: 'No widget provided',
          showLabel: true,
        };
      }
    }
  };

  return (
    <div>
      <InputGroup
        {...resolveInputGroup()}
        name="edit-widget-input-group"
        label="edit-widget-id"
        {...inputGroup}
      />
      <Button onClick={(e) => onSubmit(e)}>Update</Button>
    </div>
  );
};
