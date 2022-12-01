import { FieldValidators, ValidationType, Validators } from '../../../../forms';

export const EntityNameValidators: FieldValidators = [
  [(value: string) => value.length > 0, 'This is a required field'],
  [
    Validators[ValidationType.GENERIC_STRING],
    'This is not a valid input, please try again',
  ],
];

export const EntityDescriptionValidators: FieldValidators = [
  [(value: string) => value.length < 100, 'Too many characters'],
  [
    Validators[ValidationType.GENERIC_STRING],
    'This is not a valid input, please try again',
  ],
];
