import { useRouter } from 'expo-router';
import { useState } from 'react';
import { SafeAreaView } from 'react-native';

import SolidButton from '@/components/common/button/SolidButton';
import Typography from '@/components/common/typography';
import ProjectInviteModal from '@/components/project/ProjectInviteModal';

function Project() {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  const data = {
    project_name: '위프로',
    project_profile: 'https://picsum.photos/200',
    member_length: 6,
  };

  const onRequestClose = () => {
    setVisible(false);
    router.replace('/project');
  };

  return (
    <SafeAreaView
      style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ProjectInviteModal
        project_name={data.project_name}
        project_profile={data.project_profile}
        member_length={data.member_length}
        visible={visible}
        onRequestClose={onRequestClose}
      />
      <SolidButton onPress={() => setVisible(true)}>초대 링크 있음</SolidButton>
      <Typography>Project</Typography>
    </SafeAreaView>
  );
}

export default Project;
