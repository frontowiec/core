import * as React from 'react';

import { Button } from '../src';

export default {
  title: 'core/Button',
  component: Button,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  primary: true,
  label: 'Button',
};

/**
 * Use the `loading` prop to indicate progress. Typically use
 * this to provide feedback when triggering asynchronous actions.
 */
export const Sizes = () => (
  <>
    <Button primary={false} label="small" />
    <Button primary={false} label="medium" />
    <Button primary={false} label="large" />
  </>
);

Sizes.args = {
  label: 'Button',
};

Sizes.parameters = {
  docs: {
    storyDescription: 'asdasdasdasd',
  },
};

export const Variants = Template.bind({});
Variants.args = {
  label: 'Button',
};

Variants.story = {
  parameters: {
    docs: {
      storyDescription: 'element',
    },
  },
};
