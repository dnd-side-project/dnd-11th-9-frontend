import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import type { Meta, StoryObj } from '@storybook/react';

import SolidButton from '@/components/common/button/SolidButton';
import Storybook from '@/components/common/storybook';

const PrimaryButtonMeta: Meta<typeof SolidButton> = {
  title: 'common/Button/SolidButton',
  component: SolidButton,
  argTypes: {
    children: { controls: 'text', description: '버튼내 텍스트를 입력합니다.' },
    type: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
      description: '버튼의 색깔을 결정짓는 타입을 결정합니다.',
    },
    size: {
      description: '버튼의 사이즈를 결정합니다.',
      control: {
        type: 'select',
        options: ['large', 'medium', 'small'],
      },
    },
    disabled: {
      description: '버튼의 비활성화 여부를 결정합니다.',
      control: {
        type: 'boolean',
      },
    },
    full: {
      description: '버튼의 가로 길이 폭을 결정합니다.',
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    children: '버튼',
    type: 'primary',
    size: 'large',
    disabled: false,
  },
};

export default PrimaryButtonMeta;

export const Primary: StoryObj<typeof SolidButton> = {};

export const Preview: StoryObj<typeof SolidButton> = {
  render: () => {
    return (
      <Storybook>
        <Storybook.Row>
          <Storybook.Description
            title='size'
            variant={['large', 'medium', 'small']}
          />
          <Storybook.Item>
            <SolidButton
              size='large'
              LeftIcon={<Ionicons name='bookmark' />}
              RightIcon={<MaterialIcons name='arrow-forward-ios' />}>
              Text
            </SolidButton>
            <SolidButton
              size='medium'
              LeftIcon={<Ionicons name='bookmark' />}
              RightIcon={<MaterialIcons name='arrow-forward-ios' />}>
              Text
            </SolidButton>
            <SolidButton
              size='small'
              LeftIcon={<Ionicons name='bookmark' />}
              RightIcon={<MaterialIcons name='arrow-forward-ios' />}>
              Text
            </SolidButton>
          </Storybook.Item>
        </Storybook.Row>
        <Storybook.Row>
          <Storybook.Description
            title='disable'
            variant={['true', 'false']}
          />
          <Storybook.Item>
            <SolidButton
              size='large'
              disabled
              LeftIcon={<Ionicons name='bookmark' />}
              RightIcon={<MaterialIcons name='arrow-forward-ios' />}>
              Text
            </SolidButton>
            <SolidButton
              size='large'
              disabled={false}
              LeftIcon={<Ionicons name='bookmark' />}
              RightIcon={<MaterialIcons name='arrow-forward-ios' />}>
              Text
            </SolidButton>
          </Storybook.Item>
        </Storybook.Row>
      </Storybook>
    );
  },
};
