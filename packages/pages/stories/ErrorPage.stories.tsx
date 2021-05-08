import * as React from 'react';

import { ErrorPage } from '../src';

export default {
  title: 'pages/ErrorPage',
  component: ErrorPage,
};

const Template = args => <ErrorPage {...args} />;

export const Default = Template.bind({});
