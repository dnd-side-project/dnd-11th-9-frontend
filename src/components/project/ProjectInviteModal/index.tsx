import { Modal } from 'react-native';

import SolidButton from '@/components/common/button/SolidButton';
import Typography from '@/components/common/typography';
import ProjectImage from '@/components/project/ProjectImage';
import { color } from '@/styles/theme';

import * as S from './ProjectInviteModal.style';

type ModalType = {
  visible: boolean;
  /** 사용자가 뒤로가기 버튼을 눌렀을 때 호출될 함수 */
  onRequestClose: () => void;
};

type ProjectType = {
  project_name: string;
  project_profile: string;
  member_length: number;
} & ModalType;

function ProjectInviteModal({
  project_name,
  project_profile,
  member_length,
  visible,
  onRequestClose,
}: ProjectType) {
  return (
    <Modal
      animationType='fade'
      visible={visible}
      onRequestClose={onRequestClose}>
      <S.Container>
        <S.Contents>
          <Typography>프로젝트에 초대되었어요!</Typography>
          <S.ProjectBox>
            <ProjectImage uri={project_profile} />
            <S.TextBox>
              <Typography
                variant='Title3'
                fontWeight='bold'
                color={color.Label.Normal}>
                {project_name}
              </Typography>
              <Typography
                style={{ textAlign: 'center' }}
                color={color.Label.Alternative}>
                멤버 {member_length}명
              </Typography>
            </S.TextBox>
          </S.ProjectBox>
          <S.ButtonBox>
            <SolidButton
              size='medium'
              full>
              수락하기
            </SolidButton>
            <Typography
              style={{ textAlign: 'center' }}
              onPress={onRequestClose}
              variant='Label1/Normal'
              fontWeight='medium'
              breakWord>
              거절하기
            </Typography>
          </S.ButtonBox>
        </S.Contents>
      </S.Container>
    </Modal>
  );
}

export default ProjectInviteModal;
