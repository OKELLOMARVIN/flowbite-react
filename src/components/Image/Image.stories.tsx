import type { Meta, Story } from '@storybook/react';
import type { ImageProps } from '~/src/components/Image/Image';
import { Image } from './Image';

export default {
  title: 'Components/Image',
  component: Image,
} as Meta;

const Template: Story<ImageProps> = (args) => (
  <Image
    src={
      'https://images.unsplash.com/photo-1601625463687-25541fb72f62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    }
  />
);

export const DefaultImage = Template.bind({});
DefaultImage.args = {
  src: 'https://images.unsplash.com/photo-1601625463687-25541fb72f62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  alt: 'this is the description',
};
