import type { Meta, StoryObj } from '@storybook/react';

import ProjectImage from './';

const ProjectInviteModalMeta: Meta<typeof ProjectImage> = {
  title: 'project/ProjectImage',
  component: ProjectImage,
  argTypes: {
    uri: {
      type: 'string',
      description: '프로젝트 이미지 uri를 통해 프로젝트를 보여줍니다.',
    },
  },
};

export default ProjectInviteModalMeta;

export const Primary: StoryObj<typeof ProjectImage> = {
  args: {
    uri: 'https://picsum.photos/200',
  },
};
