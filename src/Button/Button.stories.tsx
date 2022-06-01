import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Cryptonents/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};


export const PrimaryDisabled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryDisabled.args = {
  primary: true,
  disabled: true,
  label: 'Button',
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  label: 'Button',
  disabled: true
};

export const Destroy = Template.bind({});
Destroy.args = {
  label: 'Button',
  primary: true,
  customColor: 'red'
};

