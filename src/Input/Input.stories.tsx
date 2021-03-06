import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Cryptonents/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  placeholder: 'Default',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  placeholder: 'Disabled',
};


export const WithMax = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithMax.args = {
  placeholder: 'With max',
  showMax: true
};

export const WithMaxDisabled = Template.bind({});
WithMaxDisabled.args = {
  disabled: true,
  placeholder: 'With max',
  showMax: true
};
