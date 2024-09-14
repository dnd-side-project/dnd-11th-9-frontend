import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

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
    const mockList = [
      {
        id: 1,
        name: '위프로',
        profile: 'https://picsum.photos/200',
        member_num: 6,
      },
      {
        id: 2,
        name: '후피',
        profile: 'https://picsum.photos/200',
        member_num: 3,
      },
      {
        id: 3,
        name: 'Code Red',
        profile: 'https://picsum.photos/200',
        member_num: 3,
      },
      {
        id: 4,
        name: 'Veco',
        profile: 'https://picsum.photos/200',
        member_num: 3,
      },
      {
        id: 5,
        name: '위프로',
        profile: 'https://picsum.photos/200',
        member_num: 6,
      },
      {
        id: 6,
        name: '후피',
        profile: 'https://picsum.photos/200',
        member_num: 3,
      },
      {
        id: 7,
        name: 'Code Red',
        profile: 'https://picsum.photos/200',
        member_num: 3,
      },
      {
        id: 8,
        name: 'Veco',
        profile: 'https://picsum.photos/200',
        member_num: 3,
      },
      {
        id: 9,
        name: '위프로',
        profile: 'https://picsum.photos/200',
        member_num: 6,
      },
      {
        id: 10,
        name: '후피',
        profile: 'https://picsum.photos/200',
        member_num: 3,
      },
      {
        id: 11,
        name: 'Code Red',
        profile: 'https://picsum.photos/200',
        member_num: 3,
      },
      {
        id: 12,
        name: 'Last Project',
        profile: 'https://picsum.photos/200',
        member_num: 3,
      },
    ];

    return (
      <View style={{ flex: 1, backgroundColor: color.Background.Alternative, padding: 10 }}>
        <ProjectList data={mockList} />
      </View>
    );
  },
};
