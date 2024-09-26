import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

import { MOCK_PROJECT_ITEM } from '@/__mock__/project';
import { color } from '@/styles/theme';

import ProjectItem from './';

const ProjectItemMeta: Meta<typeof ProjectItem> = {
  title: 'project/ProjectItem',
  component: ProjectItem,
  argTypes: {
    member_num: {
      control: {
        type: 'number',
      },
      description: '프로젝트의 총 인원 수를 지정합니다.',
    },
    name: {
      control: {
        type: 'text',
      },
      description: '프로젝트의 이름을 지정합니다.',
    },
    profile: {
      control: {
        type: 'text',
      },
      description: '프로젝트의 이미지를 지정합니다.',
    },
    review_count: {
      control: {
        type: 'number',
      },
      description: '프로젝트의 리뷰 수를 지정합니다.',
    },
    id: {
      control: {
        type: 'number',
      },
      description: '프로젝트의 id를 지정합니다.',
    },
  },
};

export default ProjectItemMeta;

export const Primary: StoryObj<typeof ProjectItem> = {
  render: () => {
    return (
      <View style={{ flex: 1, backgroundColor: color.Background.Alternative, padding: 10 }}>
        <ProjectItem {...MOCK_PROJECT_ITEM} />
      </View>
    );
  },
};
