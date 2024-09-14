import * as S from './ProjectImage.style';

type Props = {
  uri: string;
};

function ProjectImage({ uri }: Props) {
  return (
    <S.ProjectImageBox>
      <S.ProjectImage source={{ uri }} />
      <S.ProjectImageOutline />
    </S.ProjectImageBox>
  );
}

export default ProjectImage;
