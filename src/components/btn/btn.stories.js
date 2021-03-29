import React from 'react';

import Btn from './btn.component';

export default {
  title: 'Common/Btn',
  component: Btn
};

const Template = (args) => <Btn {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  label: 'Button'
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  type: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  type: 'secondary'
};

export const Full = Template.bind({});
Full.args = {
  label: 'Button',
  full: true
};

export const Large = Template.bind({});
Large.args = {
  label: 'Button',
  size: 'large'
};

export const Small = Template.bind({});
Small.args = {
  label: 'Button',
  size: 'small'
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Button Disabled',
  disabled: true
};