import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from '../../../Button';
import Text from '@/components/atoms/text';

// CSF format story
export const basic = () => {
  const disabled = false;
  const expanded = false;
  const loading = false;

  const children = text('children', 'Open');

  const style = {
    justifyContent: 'space-between',
  };

  return (
    <div className="d-flex w-25" style={style}>
      <div className="mr-9">
        <Button
          onClick={action('button-clicked')}
          onMouseEnter={action('mouse-enter')}
          onMouseLeave={action('mouse-leave')}
          appearance={'basic'}
          size={'regular'}
          expanded={expanded}
          disabled={disabled}
          loading={loading}
          aria-label="Open"
        >
          {children}
        </Button>
        <br />
        <Text weight="strong">Default</Text>
      </div>
      <div className="mr-9">
        <Button
          onClick={action('button-clicked')}
          onMouseEnter={action('mouse-enter')}
          onMouseLeave={action('mouse-leave')}
          appearance={'basic'}
          size={'regular'}
          expanded={expanded}
          disabled={true}
          loading={loading}
          aria-label="Open"
        >
          {children}
        </Button>
        <br />
        <Text weight="strong">Disabled</Text>
      </div>
      <div className="mr-9">
        <Button
          onClick={action('button-clicked')}
          onMouseEnter={action('mouse-enter')}
          onMouseLeave={action('mouse-leave')}
          appearance={'basic'}
          size={'regular'}
          expanded={expanded}
          disabled={disabled}
          loading={true}
          aria-label="Loading"
        >
          {''}
        </Button>
        <br />
        <Text weight="strong">Loading</Text>
      </div>
      <div className="mr-9">
        <Button
          onClick={action('button-clicked')}
          onMouseEnter={action('mouse-enter')}
          onMouseLeave={action('mouse-leave')}
          appearance={'basic'}
          size={'regular'}
          selected={true}
          aria-label="Selected"
        >
          {children}
        </Button>
        <br />
        <Text weight="strong">Selected</Text>
      </div>
      <div className="mr-9">
        <Button
          onClick={action('button-clicked')}
          onMouseEnter={action('mouse-enter')}
          onMouseLeave={action('mouse-leave')}
          appearance={'basic'}
          size={'regular'}
          selected={true}
          icon="events"
          aria-label="Selected"
        />
        <br />
        <Text weight="strong">Selected Icon</Text>
      </div>
    </div>
  );
};

export default {
  title: 'Components/Button/Variants/State/Basic',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button',
        a11yProps: ` 
        **aria-label:** Add \`aria-label='Open'\` to describe the action of button 
         `,
      },
    },
  },
};
