import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProjectCard } from './ProjectCard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Cryptonents/ProjectCard',
  component: ProjectCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof ProjectCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProjectCard> = (args) => <ProjectCard {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  title: '$DAI - MakerDAO',
  content: 'A collateralized stablecoin based on sound principles, and designed to produce liquidity with no dilution...',
  tags: [{
    label: 'Token',
    color: 'sky'
  }, {
    label: 'Sponsored',
    color: 'amber'
  }],
  metrics: [{
    key: 'Raised',
    value: '$3,000,000'
  }, {
    key: 'Goal',
    value: '$5,000,000'
  },{
    key: 'Token price',
    value: '$0.1'
  },{
    key: 'Participants',
    value: '40,000'
  }]
};

