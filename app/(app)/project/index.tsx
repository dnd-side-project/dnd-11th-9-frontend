import { useLayoutEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';

import ProjectInviteModal from '@/components/project/ProjectInviteModal';
import ProjectList from '@/components/project/ProjectList';

function Project() {
  const [visible, setVisible] = useState(false);

  const data = {
    project_name: '위프로',
    project_profile: 'https://picsum.photos/200',
    member_length: 6,
  };

  const onRequestClose = () => {
    setVisible(false);
  };

  useLayoutEffect(() => {
    setVisible(true);
  }, []);

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
    <SafeAreaView style={{ flex: 1 }}>
      <ProjectInviteModal
        project_name={data.project_name}
        project_profile={data.project_profile}
        member_length={data.member_length}
        visible={visible}
        onRequestClose={onRequestClose}
      />
      <ProjectList data={mockList} />
    </SafeAreaView>
  );
}

export default Project;
