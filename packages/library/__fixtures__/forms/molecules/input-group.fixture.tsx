import { InputGroup, ValidationType, Validators } from '../../../src';

export default {
  ['Basic']: () => {
    return (
      <div style={{ width: '34rem', padding: '2rem' }}>
        <InputGroup
          label="test"
          showLabel={true}
          labelText="Label"
          name="test"
          placeholder="Placeholder"
          validators={[
            [(value: string) => value.length > 0, 'This is a required field'],
            [
              Validators[ValidationType.GENERIC_STRING],
              'Please enter a valid string',
            ],
          ]}
        />
      </div>
    );
  },
};
