import type { Meta, StoryObj } from '@storybook/react';

import Storybook from '@/components/common/storybook';

import Skeleton from './';

const SkeletonMeta: Meta<typeof Skeleton> = {
  title: 'common/Skeleton',
  component: Skeleton,
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
};

export default SkeletonMeta;

export const Basic: StoryObj<typeof Skeleton> = {
  args: {},
  decorators: [],
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
