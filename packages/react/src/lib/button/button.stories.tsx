import type { Meta } from '@storybook/react';
import { Button } from './button';

const Story: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
};
export default Story;

export const Primary = {
  args: {
    onClick: () => {
      console.log('hi');
    },
  },
};

export const Red = {
  args: {
    className: 'btn-red',
  },
};

export const Blue = {
  args: {
    className: 'btn-blue',
  },
};
