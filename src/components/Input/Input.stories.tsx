import { Meta, StoryObj } from '@storybook/react';
import { Envelope } from 'phosphor-react';
import { Input, InputRootProps } from './Input';

export default {
  title: 'Components/Input',
  component: Input.Root,
  args: {
    children: [
      <Input.Icon><Envelope /></Input.Icon>,
      <Input.Content placeholder="Type your e-mail address" />
    ]
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
} as Meta<InputRootProps>

export const Default: StoryObj<InputRootProps> = {};
export const WithoutIcon: StoryObj<InputRootProps> = {
  args: {
    children: <Input.Content placeholder="Type your e-mail address" />
  }
};