import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

import { MOCK_PROJECT_LIST } from '@/__mock__/project';
import { color } from '@/styles/theme';

import ProjectList from './';

const ProjectListMeta: Meta<typeof ProjectList> = {
  title: 'project/ProjectList',
  component: ProjectList,
  argTypes: {},
};

export default ProjectListMeta;

export const Primary: StoryObj<typeof ProjectList> = {
  render: () => {
    return (
      <View style={{ flex: 1, backgroundColor: color.Background.Alternative, padding: 10 }}>
        <ProjectList data={MOCK_PROJECT_LIST} />
      </View>
    );
  },
};
