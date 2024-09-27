import { useLayoutEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';

import { MOCK_PROJECT_ITEM, MOCK_PROJECT_LIST } from '@/__mock__/project';
import ProjectInviteModal from '@/components/project/ProjectInviteModal';
import ProjectList from '@/components/project/ProjectList';
import { color } from '@/styles/theme';

const inviteData = MOCK_PROJECT_ITEM;
const data = MOCK_PROJECT_LIST;

function Project() {
  const [visible, setVisible] = useState(false);

  const onRequestClose = () => {
    setVisible(false);
  };

  useLayoutEffect(() => {
    setVisible(true);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: color.Background.Alternative }}>
      <ProjectInviteModal
        project_name={inviteData.name}
        project_profile={inviteData.profile}
        member_length={inviteData.member_num}
        visible={visible}
        onRequestClose={onRequestClose}
      />
      <ProjectList data={data} />
    </SafeAreaView>
  );
}

export default Project;
