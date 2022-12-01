import { useState } from 'react';
import { CheckboxGroup } from '../../../src/forms/molecules/checkbox-group';

export default {
  ['Unchecked']: () => {
    const [checked, setChecked] = useState<boolean>(false);

    return (
      <div style={{ width: '34rem', padding: '2rem' }}>
        <CheckboxGroup
          labelText="Checkbox"
          value="checkbox"
          id="checkbox"
          checked={checked}
          onChecked={(value, isChecked) => setChecked(isChecked)}
        />
      </div>
    );
  },
  ['Checked']: () => {
    const [checked, setChecked] = useState<boolean>(true);

    return (
      <div style={{ width: '34rem', padding: '2rem' }}>
        <CheckboxGroup
          labelText="Checkbox"
          value="checkbox"
          id="checkbox"
          checked={checked}
          onChecked={(value, isChecked) => setChecked(isChecked)}
        />
      </div>
    );
  },
};
