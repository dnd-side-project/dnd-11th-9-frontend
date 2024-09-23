import { Feather } from '@expo/vector-icons';

import { theme } from '@/styles/theme';

import Typography from '../common/typography';
import * as S from './Profile.style';

type Props = {
  uri: string;
  name: string;
  job: string;
};

function Profile({ uri, name, job }: Props) {
  return (
    <S.ProfileContainer>
      <S.ProfileImageContainer>
        <S.ProfileImage source={{ uri }} />
        <S.CameraIcon>
          <Feather
            name='camera'
            size={18}
          />
        </S.CameraIcon>
      </S.ProfileImageContainer>

      <S.ProfileInfo>
        <Typography
          style={{ fontSize: 18 }}
          fontWeight='bold'
          color={theme.color.Label.Normal}>
          {name}
        </Typography>
        <Typography color={theme.color.Label.Alternative}>{job}</Typography>
      </S.ProfileInfo>
    </S.ProfileContainer>
  );
}

export default Profile;
