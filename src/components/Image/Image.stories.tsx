import type { Meta, Story } from '@storybook/react';
import type { ImageProps } from '~/src/components/Image/Image';
import { Image } from './Image';

export default {
  title: 'Components/Image',
  component: Image,
} as Meta;

const Template: Story<ImageProps> = (args) => <Image {...args} />;

export const DefaultImage = Template.bind({});
DefaultImage.args = {
  variant: 'filled',
};
