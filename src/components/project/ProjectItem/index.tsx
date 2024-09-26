import SlideBar from '@/components/common/slide-bar';
import Typography from '@/components/common/typography';
import ProjectImage from '@/components/project/ProjectImage';
import type { ProjectItemType } from '@/components/project/ProjectList';
import { color } from '@/styles/theme';

import * as S from './style';

function ProjectItem({ name, member_num, profile, review_count }: ProjectItemType) {
  return (
    <S.Container>
      <ProjectImage uri={profile} />
      <S.ProjectStatusBox>
        <Typography
          variant='Caption1'
          color={color.Label.Alternative}>
          프로젝트
        </Typography>
        <S.ProgressBox>
          <S.ProgressInfo>
            <Typography
              variant='Body1/Normal'
              fontWeight='semiBold'
              color={color.Label.Normal}>
              {name}
            </Typography>
            <Typography
              variant='Caption1'
              color={color.Label.Assistive}>
              {review_count} / {member_num}
            </Typography>
          </S.ProgressInfo>
          <SlideBar
            max_value={member_num}
            current_value={review_count}
          />
        </S.ProgressBox>
      </S.ProjectStatusBox>
    </S.Container>
  );
}

export default ProjectItem;
