import { rgba } from 'polished';

import WeproLogoSvg from '@/components/common/icon/wepro-logo-svg';
import Typography from '@/components/common/typography';
import { theme } from '@/styles/theme';

import * as S from './LogoSection.styles';

function LogoSection() {
  return (
    <S.Container>
      <Typography
        variant='Heading1'
        color={rgba(0, 0, 0, 0.3)}>
        함께 완성하는 나의 프로필
      </Typography>
      <WeproLogoSvg
        color={theme.color.Label.Normal}
        width={195}
        height={48.5}
      />
    </S.Container>
  );
}

export default LogoSection;
