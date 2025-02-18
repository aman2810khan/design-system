import * as React from 'react';
import { select, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from '../Button';

// CSF format story
export const all = () => {
  const type = select('type', ['button', 'submit', 'reset'], undefined);

  const appearance = select('appearance', ['basic', 'primary', 'alert', 'transparent'], undefined);

  const size = select('size', ['tiny', 'regular', 'large'], undefined);

  const disabled = boolean('disabled', false);

  const expanded = boolean('expanded', false);

  const loading = boolean('loading', false);

  const icon = text('icon', '');

  const iconAlign = select('iconAlign', ['left', 'right'], undefined);

  const children = text('children', 'Open');

  return (
    <Button
      onClick={action('button-clicked')}
      onMouseEnter={action('mouse-enter')}
      onMouseLeave={action('mouse-leave')}
      type={type}
      appearance={appearance}
      size={size}
      expanded={expanded}
      disabled={disabled}
      loading={loading}
      icon={icon}
      iconAlign={iconAlign}
      aria-label="Open"
    >
      {children}
    </Button>
  );
};

export default {
  title: 'Components/Button/All',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        a11yProps: ` 
        **aria-label:** Add \`aria-label='Open'\` to describe the action of button 
         `,
      },
    },
  },
};
