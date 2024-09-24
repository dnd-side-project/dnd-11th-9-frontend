import type { Meta, StoryObj } from '@storybook/react';

import Storybook from '@/components/common/storybook';

import Skeleton from './';

const SkeletonMeta: Meta<typeof Skeleton> = {
  title: 'common/Skeleton',
  component: Skeleton,
  argTypes: {
    width: {
      control: {
        type: 'number',
      },
      description: '스켈레톤의 너비를 지정합니다.',
    },
    height: {
      control: {
        type: 'number',
      },
      description: '스켈레톤의 높이를 지정합니다.',
    },
    variant: {
      control: {
        type: 'select',
        options: ['text', 'rounded', 'circular'],
      },
      description: '스켈레톤의 모양을 지정합니다.',
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default SkeletonMeta;

export const Primary: StoryObj<typeof Skeleton> = {
  args: {
    width: 200,
    height: 40,
    variant: 'text',
  },
};

export const Preview: StoryObj<typeof Skeleton> = {
  render: () => {
    return (
      <Storybook>
        <Storybook.Row>
          <Storybook.Description
            title='variant'
            variant={['text', 'rounded', 'circular']}
          />
          <Storybook.Item>
            <Skeleton
              variant='text'
              width={200}
              height={40}
            />
            <Skeleton
              variant='rounded'
              width={200}
              height={40}
            />
            <Skeleton
              variant='circular'
              width={40}
              height={40}
            />
          </Storybook.Item>
        </Storybook.Row>
      </Storybook>
    );
  },
};
