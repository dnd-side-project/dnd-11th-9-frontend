import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';

import { MOCK_PROJECT_ITEM, MOCK_PROJECT_LIST } from '@/__mock__/project';
import CustomHeader from '@/components/common/custom-header';
import CustomLayout from '@/components/common/custom-layout';
import ProjectInviteModal from '@/components/project/ProjectInviteModal';
import ProjectList from '@/components/project/ProjectList';
import { PROJECT_URLS } from '@/constants';
import { color } from '@/styles/theme';
import { isMobile } from '@/utils';

const inviteData = MOCK_PROJECT_ITEM;
const data = MOCK_PROJECT_LIST;

function Project() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const onRequestClose = () => {
    setVisible(false);
  };

  return (
    <CustomLayout backgroundColor={color.Background.Alternative}>
      <CustomHeader
        mt
        backgroundColor={color.Background.Alternative}
        title='프로젝트'
        right={
          <CustomHeader.ButtonGroup>
            <CustomHeader.ButtonGroupItem>
              <AntDesign
                name='search1'
                size={24}
              />
            </CustomHeader.ButtonGroupItem>
            {isMobile && (
              <CustomHeader.ButtonGroupItem
                onPress={() => router.navigate({ pathname: PROJECT_URLS.CREATE })}>
                <AntDesign
                  name='plus'
                  size={24}
                />
              </CustomHeader.ButtonGroupItem>
            )}
          </CustomHeader.ButtonGroup>
        }
      />
      <ProjectInviteModal
        project_name={inviteData.name}
        project_profile={inviteData.profile}
        member_length={inviteData.member_num}
        visible={visible}
        onRequestClose={onRequestClose}
      />
      <ProjectList data={data} />
    </CustomLayout>
  );
}

export default Project;
