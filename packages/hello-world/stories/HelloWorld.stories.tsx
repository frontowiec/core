import * as React from 'react';

import { HelloWorld } from '../src';

export default {
  title: 'example/HelloWorld',
  component: HelloWorld,
};

const Template = args => <HelloWorld {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: 'green',
};
