import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import type { Meta, StoryObj } from '@storybook/react';

import TextButton from '@/components/common/button/TextButton';
import Storybook from '@/components/common/storybook';

const TextButtonMeta: Meta<typeof TextButton> = {
  title: 'common/Button/TextButton',
  component: TextButton,
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
        options: ['full', 'large', 'medium', 'small'],
      },
    },
    disabled: {
      description: '버튼의 비활성화 여부를 결정합니다.',
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    children: '버튼',
    type: 'primary',
    size: 'full',
    disabled: false,
  },
};

export default TextButtonMeta;

export const Primary: StoryObj<typeof TextButton> = {};

export const Preview: StoryObj<typeof TextButton> = {
  render: () => {
    return (
      <Storybook>
        <Storybook.Row>
          <Storybook.Description
            title='size'
            variant={['large', 'medium', 'small']}
          />
          <Storybook.Item>
            <TextButton
              size='large'
              LeftIcon={<Ionicons name='bookmark' />}
              RightIcon={<MaterialIcons name='arrow-forward-ios' />}>
              Text
            </TextButton>
            <TextButton
              size='medium'
              LeftIcon={<Ionicons name='bookmark' />}
              RightIcon={<MaterialIcons name='arrow-forward-ios' />}>
              Text
            </TextButton>
            <TextButton
              size='small'
              LeftIcon={<Ionicons name='bookmark' />}
              RightIcon={<MaterialIcons name='arrow-forward-ios' />}>
              Text
            </TextButton>
          </Storybook.Item>
        </Storybook.Row>
        <Storybook.Row>
          <Storybook.Description
            title='disable'
            variant={['false', 'true']}
          />
          <Storybook.Item>
            <TextButton
              size='large'
              disabled
              LeftIcon={<Ionicons name='bookmark' />}
              RightIcon={<MaterialIcons name='arrow-forward-ios' />}>
              Text
            </TextButton>
            <TextButton
              size='large'
              disabled={false}
              LeftIcon={<Ionicons name='bookmark' />}
              RightIcon={<MaterialIcons name='arrow-forward-ios' />}>
              Text
            </TextButton>
          </Storybook.Item>
        </Storybook.Row>
      </Storybook>
    );
  },
};
