import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Pill } from './Pill';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Cryptonents/Pill',
  component: Pill,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof Pill>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Pill> = (args) => <Pill {...args} />;

export const Active = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Active.args = {
  active: true,
  label: 'Pill',
};


export const ActiveOutlined = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ActiveOutlined.args = {
  active: true,
  outline: true,
  label: 'Pill',
};
  
export const Inactive = Template.bind({});
Inactive.args = {
  label: 'Pill',
};
