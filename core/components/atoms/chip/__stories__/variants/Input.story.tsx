import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import { Text } from '@/index';
import Chip from '../../Chip';
import { action } from '@storybook/addon-actions';
const BooleanValue = [true, false];
export const Input = () => {
  const icon = text('icon', 'assessment');
  const label = text('label', 'Input');
  return (
    <div className="d-flex">
      {BooleanValue.map((booleanvalue, ind) => {
        return (
          <div key={ind} className="mr-9">
            <Chip
              icon={icon}
              label={label}
              clearButton={true}
              disabled={booleanvalue}
              type="input"
              onClose={action(`onClose: ${name}`)}
              onClick={action(`onClick: ${name}`)}
              name={'chip'}
            />
            <br />
            <Text weight="strong">{`Disabled: ${booleanvalue}`}</Text>
          </div>
        );
      })}
    </div>
  );
};
export default {
  title: 'Components/Chip/Variants/Input',
  component: Chip,
  parameters: {
    docs: {
      docPage: {
        title: 'Chip',
      },
    },
  },
};
