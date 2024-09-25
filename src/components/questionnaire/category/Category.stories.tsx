import type { Meta, StoryObj } from '@storybook/react';

import Storybook from '@/components/common/storybook';
import Category from '@/components/questionnaire/category/index';

const CategoryMeta: Meta<typeof Category> = {
  title: 'questionnaire/Category',
  component: Category,
  argTypes: {
    category: {
      control: {
        type: 'select',
        options: ['기술', '커뮤니케이션', '성실성', '협업', '문서화', '시간관리', '리더십'],
      },
      description: '카테고리명을 입력합니다.',
    },
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
    onboarding: {
      control: {
        type: 'boolean',
      },
      description: '온보딩 칩인지 결정합니다.',
    },
  },
};

export default CategoryMeta;

export const Primary: StoryObj<typeof Category> = {
  args: {
    hasIcon: false,
    isActive: false,
    category: '기술',
    onboarding: false,
  },
};

export const Preview: StoryObj<typeof Category> = {
  render: () => {
    return (
      <Storybook>
        <Storybook.Row>
          <Storybook.Description
            title='icon'
            variant={['기술', '커뮤니케이션', '성실성', '협업', '문서화', '시간관리', '리더십']}
          />
          <Storybook.Item>
            <Category
              hasIcon={false}
              isActive={false}
              category='기술'
            />
            <Category
              hasIcon={false}
              isActive={false}
              category='커뮤니케이션'
            />
            <Category
              hasIcon={false}
              isActive={false}
              category='성실성'
            />
            <Category
              hasIcon={false}
              isActive={false}
              category='협업'
            />
            <Category
              hasIcon={false}
              isActive={false}
              category='문서화'
            />
            <Category
              hasIcon={false}
              isActive={false}
              category='시간관리'
            />
            <Category
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
            <Category
              hasIcon={false}
              isActive
              category='기술'
            />
            <Category
              hasIcon={false}
              isActive
              category='커뮤니케이션'
            />
            <Category
              hasIcon={false}
              isActive
              category='성실성'
            />
            <Category
              hasIcon={false}
              isActive
              category='협업'
            />
            <Category
              hasIcon={false}
              isActive
              category='문서화'
            />
            <Category
              hasIcon={false}
              isActive
              category='시간관리'
            />
            <Category
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
            <Category
              hasIcon={true}
              isActive={false}
              category='기술'
            />
            <Category
              hasIcon={true}
              isActive={false}
              category='커뮤니케이션'
            />
            <Category
              hasIcon={true}
              isActive={false}
              category='성실성'
            />
            <Category
              hasIcon={true}
              isActive={false}
              category='협업'
            />
            <Category
              hasIcon={true}
              isActive={false}
              category='문서화'
            />
            <Category
              hasIcon={true}
              isActive={false}
              category='시간관리'
            />
            <Category
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
            <Category
              hasIcon={true}
              isActive
              category='기술'
            />
            <Category
              hasIcon={true}
              isActive
              category='커뮤니케이션'
            />
            <Category
              hasIcon={true}
              isActive
              category='성실성'
            />
            <Category
              hasIcon={true}
              isActive
              category='협업'
            />
            <Category
              hasIcon={true}
              isActive
              category='문서화'
            />
            <Category
              hasIcon={true}
              isActive
              category='시간관리'
            />
            <Category
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
