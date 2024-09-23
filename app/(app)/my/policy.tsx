import styled from '@emotion/native';

import SolidButton from '@/components/common/button/SolidButton';
import Typography from '@/components/common/typography';
import { useTabBarEffect } from '@/hooks';
import { flexDirectionColumnCenter } from '@/styles/common';
import { theme } from '@/styles/theme';

function Policy() {
  useTabBarEffect();

  return (
    <S.Container>
      <S.ButtonSection>
        <SolidButton
          size='large'
          full>
          계속 이용하기
        </SolidButton>
        <Typography
          style={{ textAlign: 'center' }}
          variant='Body1/Normal'
          color={theme.color.Label.Alternative}
          breakWord>
          탈퇴하기
        </Typography>
      </S.ButtonSection>
    </S.Container>
  );
}

export default Policy;

const S = {
  Container: styled.View`
    flex: 1;
    padding: 23px 20px 0;
    color: ${({ theme }) => theme.color.Label.Normal};
    background-color: ${({ theme }) => theme.color.Background.Alternative};
  `,
  ButtonSection: styled.View`
    ${flexDirectionColumnCenter}
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    gap: 8px;
    padding: 12px 20px 30px;
  `,
};
