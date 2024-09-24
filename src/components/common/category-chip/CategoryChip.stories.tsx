import type { Meta, StoryObj } from '@storybook/react';

import CategoryChip from '@/components/common/category-chip/index';
import Storybook from '@/components/common/storybook';

const CategoryChipMeta: Meta<typeof CategoryChip> = {
  title: 'common/CategoryChip',
  component: CategoryChip,
  argTypes: {
    category: {
      control: {
        type: 'select',
        options: ['기술', '커뮤니케이션', '성실성', '협업', '문서화', '시간관리', '리더십'],
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
            variant={['기술', '커뮤니케이션', '성실성', '협업', '문서화', '시간관리', '리더십']}
          />
          <Storybook.Item>
            <CategoryChip category='기술' />
            <CategoryChip category='커뮤니케이션' />
            <CategoryChip category='성실성' />
            <CategoryChip category='협업' />
            <CategoryChip category='문서화' />
            <CategoryChip category='시간관리' />
            <CategoryChip category='리더십' />
          </Storybook.Item>
        </Storybook.Row>
      </Storybook>
    );
  },
};
