import { rest } from 'msw';
import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { Signin } from './Signin';

export default {
  title: 'Pages/Sign in',
  component: Signin,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handlers: [
        rest.post('/sessions', (request, response, context) => {
          return response(context.json({
            message: 'Login realizado!'
          }));
        })
      ]
    }
  }
} as Meta

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(canvas.getByPlaceholderText('johndoe@example.com'), 'ana@email.com');
    userEvent.type(canvas.getByPlaceholderText('**********'), '123456');

    await waitFor(() => {
      return userEvent.click(canvas.getByRole('button'));
    })
  }
};