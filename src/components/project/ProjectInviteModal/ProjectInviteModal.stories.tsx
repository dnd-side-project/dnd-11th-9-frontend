import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { View } from 'react-native';

import SolidButton from '@/components/common/button/SolidButton';

import ProjectInviteModal from './';

const ProjectInviteModalMeta: Meta<typeof ProjectInviteModal> = {
  title: 'project/ProjectInviteModal',
  component: ProjectInviteModal,
  argTypes: {},
};

export default ProjectInviteModalMeta;

export const Primary: StoryObj<typeof ProjectInviteModal> = {
  args: {
    project_name: '위프로',
    project_profile: 'https://picsum.photos/200',
    member_length: 6,
  },
  render: (args) => {
    const [show, setShow] = useState(false);

    const onRequestClose = () => {
      setShow(false);
    };

    return (
      <View style={{ flex: 1 }}>
        <SolidButton onPress={() => setShow(true)}>버튼 열기</SolidButton>
        <ProjectInviteModal
          {...args}
          visible={show}
          onRequestClose={onRequestClose}
        />
      </View>
    );
  },
};
