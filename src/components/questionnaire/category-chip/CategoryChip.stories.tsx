import type { Meta, StoryObj } from '@storybook/react';

import Storybook from '@/components/common/storybook';

import CategoryChip from './';

const CategoryChipMeta: Meta<typeof CategoryChip> = {
  title: 'questionnaire/CategoryChip',
  component: CategoryChip,
  argTypes: {
    category: {
      control: {
        type: 'select',
        options: [
          '기술',
          '성실성',
          '문서화',
          '문제해결',
          '커뮤니케이션',
          '리더십',
          '팔로워십',
          '배려심',
          '아이데이션',
        ],
      },
      description: '카테고리명을 입력합니다.',
    },
  },
};

export default CategoryChipMeta;

export const Primary: StoryObj<typeof CategoryChip> = {
  args: {
    category: '기술',
  },
};

export const Preview: StoryObj<typeof CategoryChip> = {
  render: () => {
    return (
      <Storybook>
        <Storybook.Row>
          <Storybook.Description
            title='icon'
            variant={[
              '기술',
              '커뮤니케이션',
              '성실성',
              '문서화',
              '문제해결',
              '리더십',
              '팔로워십',
              '아이데이션',
              '배려심',
            ]}
          />
          <Storybook.Item>
            <CategoryChip category='기술' />
            <CategoryChip category='커뮤니케이션' />
            <CategoryChip category='성실성' />
            <CategoryChip category='문서화' />
            <CategoryChip category='문제해결' />
            <CategoryChip category='리더십' />
            <CategoryChip category='팔로워십' />
            <CategoryChip category='아이데이션' />
            <CategoryChip category='배려심' />
          </Storybook.Item>
        </Storybook.Row>
      </Storybook>
    );
  },
};
