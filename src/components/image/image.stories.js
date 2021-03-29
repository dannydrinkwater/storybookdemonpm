import React from 'react';

import Image from './image.component';

export default {
  title: 'Common/Image',
  component: Image
};

const Template = (args) => <Image {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  src: 'https://via.placeholder.com/300x150.png?text=Image',
  alt: 'Image',
  width: 300
};