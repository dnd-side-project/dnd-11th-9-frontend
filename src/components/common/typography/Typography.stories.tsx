import type { Meta, StoryObj } from '@storybook/react';

import Typography from './index';

const CustomTextMeta: Meta<typeof Typography> = {
  title: 'common/Typography',
  component: Typography,
  argTypes: {
    color: {
      control: {
        type: 'color',
      },
      description: '글씨의 색깔을 지정합니다.',
    },
    fontWeight: {
      control: {
        type: 'select',
        options: ['normal', 'bold', 'semiBold', 'medium'],
      },
      description: '글씨의 굵기를 지정합니다.',
    },
    variant: {
      control: {
        type: 'select',
        options: [
          'Display1',
          'Display2',
          'Title1',
          'Title2',
          'Title3',
          'Heading1',
          'Heading2',
          'Headline1',
          'Headline2',
          'Body1/Normal',
          'Body1/Reading',
          'Body2/Normal',
          'Body2/Reading',
          'Label1/Normal',
          'Label1/Reading',
          'Label2',
          'Caption1',
          'Caption2',
        ],
      },
      description: '텍스트의 크기, 자간, 줄간 등의 스타일을 지정합니다.',
    },
    children: { control: 'text', description: '표시할 텍스트를 입력합니다.' },
  },
  args: {
    children: 'Wepro',
    variant: 'Title1',
    color: 'black',
  },
};

export default CustomTextMeta;

export const Basic: StoryObj<typeof Typography> = {
  args: {
    variant: 'Title1',
    color: 'black',
    fontWeight: 'normal',
  },
};
