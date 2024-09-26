import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

import { MOCK_PROJECT_DETAIL } from '@/__mock__/project';
import { SCREEN_SIZE } from '@/constants';

import ProjectDetail from './';

const ProjectInviteModalMeta: Meta<typeof ProjectDetail> = {
  title: 'project/ProjectDetail',
  component: ProjectDetail,
  parameters: {
    layout: 'centered',
  },
};

export default ProjectInviteModalMeta;

export const Primary: StoryObj<typeof ProjectDetail> = {
  args: {
    data: MOCK_PROJECT_DETAIL,
  },
  render: (props) => (
    <View style={{ width: SCREEN_SIZE.WEB_WIDTH, height: SCREEN_SIZE.WEB_HEIGHT }}>
      <ProjectDetail {...props} />
    </View>
  ),
};
