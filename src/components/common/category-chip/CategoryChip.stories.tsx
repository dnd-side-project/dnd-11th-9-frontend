import type { Meta, StoryObj } from '@storybook/react';

import CategoryChip from '@/components/common/category-chip/index';
import Storybook from '@/components/common/storybook';

const CategoryChipMeta: Meta<typeof CategoryChip> = {
  title: 'common/CategoryChip',
  component: CategoryChip,
  argTypes: {
    hasIcon: {
      control: {
        type: 'boolean',
      },
      description: '아이콘을 표시할지 결정합니다.',
    },
    isActive: {
      control: {
        type: 'boolean',
      },
      description: '칩의 활성화 여부를 결정합니다.',
    },
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
    hasIcon: false,
    isActive: false,
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
            <CategoryChip
              hasIcon={false}
              isActive={false}
              category='기술'
            />
            <CategoryChip
              hasIcon={false}
              isActive={false}
              category='커뮤니케이션'
            />
            <CategoryChip
              hasIcon={false}
              isActive={false}
              category='성실성'
            />
            <CategoryChip
              hasIcon={false}
              isActive={false}
              category='협업'
            />
            <CategoryChip
              hasIcon={false}
              isActive={false}
              category='문서화'
            />
            <CategoryChip
              hasIcon={false}
              isActive={false}
              category='시간관리'
            />
            <CategoryChip
              hasIcon={false}
              isActive={false}
              category='리더십'
            />
          </Storybook.Item>
        </Storybook.Row>
        <Storybook.Row>
          <Storybook.Description
            title='icon'
            variant={['기술', '커뮤니케이션', '성실성', '협업', '문서화', '시간관리', '리더십']}
          />
          <Storybook.Item>
            <CategoryChip
              hasIcon={false}
              isActive
              category='기술'
            />
            <CategoryChip
              hasIcon={false}
              isActive
              category='커뮤니케이션'
            />
            <CategoryChip
              hasIcon={false}
              isActive
              category='성실성'
            />
            <CategoryChip
              hasIcon={false}
              isActive
              category='협업'
            />
            <CategoryChip
              hasIcon={false}
              isActive
              category='문서화'
            />
            <CategoryChip
              hasIcon={false}
              isActive
              category='시간관리'
            />
            <CategoryChip
              hasIcon={false}
              isActive
              category='리더십'
            />
          </Storybook.Item>
        </Storybook.Row>
        <Storybook.Row>
          <Storybook.Description
            title='icon'
            variant={['기술', '커뮤니케이션', '성실성', '협업', '문서화', '시간관리', '리더십']}
          />
          <Storybook.Item>
            <CategoryChip
              hasIcon={true}
              isActive={false}
              category='기술'
            />
            <CategoryChip
              hasIcon={true}
              isActive={false}
              category='커뮤니케이션'
            />
            <CategoryChip
              hasIcon={true}
              isActive={false}
              category='성실성'
            />
            <CategoryChip
              hasIcon={true}
              isActive={false}
              category='협업'
            />
            <CategoryChip
              hasIcon={true}
              isActive={false}
              category='문서화'
            />
            <CategoryChip
              hasIcon={true}
              isActive={false}
              category='시간관리'
            />
            <CategoryChip
              hasIcon={true}
              isActive={false}
              category='리더십'
            />
          </Storybook.Item>
        </Storybook.Row>
        <Storybook.Row>
          <Storybook.Description
            title='icon'
            variant={['기술', '커뮤니케이션', '성실성', '협업', '문서화', '시간관리', '리더십']}
          />
          <Storybook.Item>
            <CategoryChip
              hasIcon={true}
              isActive
              category='기술'
            />
            <CategoryChip
              hasIcon={true}
              isActive
              category='커뮤니케이션'
            />
            <CategoryChip
              hasIcon={true}
              isActive
              category='성실성'
            />
            <CategoryChip
              hasIcon={true}
              isActive
              category='협업'
            />
            <CategoryChip
              hasIcon={true}
              isActive
              category='문서화'
            />
            <CategoryChip
              hasIcon={true}
              isActive
              category='시간관리'
            />
            <CategoryChip
              hasIcon={true}
              isActive
              category='리더십'
            />
          </Storybook.Item>
        </Storybook.Row>
      </Storybook>
    );
  },
};
