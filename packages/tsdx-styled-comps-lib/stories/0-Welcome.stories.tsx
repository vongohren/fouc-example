import React from 'react';
import { Bar } from '@';

export default {
  title: 'Welcome',
};

export const toStorybook = () => <Bar />;

toStorybook.story = {
  name: 'to Storybook',
};
