import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { View } from 'react-native';

import SolidButton from '@/components/common/button/SolidButton';
import { SCREEN_SIZE } from '@/constants';
import { color } from '@/styles/theme';

import ConfirmModal from './ConfirmModal';

const ConfirmModalMeta: Meta<typeof ConfirmModal> = {
  title: 'common/modal/ConfirmModal',
  component: ConfirmModal,
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
      description: '모달의 제목을 설정합니다.',
    },
    description: {
      control: {
        type: 'text',
      },
      description: '모달의 설명을 설정합니다.',
    },
    onConfirm: {
      action: 'confirm',
      description: '확인 버튼을 눌렀을 때 실행될 함수를 설정합니다.',
    },
    onCancel: {
      action: 'cancel',
      description: '취소 버튼을 눌렀을 때 실행될 함수를 설정합니다.',
    },
  },
};

export default ConfirmModalMeta;

export const Primary: StoryObj<typeof ConfirmModal> = {
  args: {
    title: '이대로 설문지를 만들까요?',
    description: '9월 5일까지 받은 리뷰들로\n' + '명함이 제작돼요',
    onConfirm: () => console.log('confirm'),
    onCancel: () => console.log('cancel'),
  },
  render: (args) => {
    const [showModal, setShowModal] = useState(false);

    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: color.Background.Alternative,
            width: SCREEN_SIZE.WEB_WIDTH,
            height: SCREEN_SIZE.WEB_HEIGHT,
          }}>
          {!showModal && <SolidButton onPress={() => setShowModal(true)}>버튼 보이기</SolidButton>}
          <ConfirmModal
            {...args}
            visible={showModal}
            onConfirm={() => {
              args.onConfirm();
              setShowModal(false);
            }}
            onCancel={() => {
              args.onCancel();
              setShowModal(false);
            }}
          />
        </View>
      </View>
    );
  },
};
