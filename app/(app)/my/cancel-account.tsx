import styled from '@emotion/native';

import SolidButton from '@/components/common/button/SolidButton';
import Typography from '@/components/common/typography';
import { useTabBarEffect } from '@/hooks';
import { flexDirectionColumnCenter, flexDirectionRow } from '@/styles/common';
import { theme } from '@/styles/theme';

function CancelAccount() {
  useTabBarEffect();

  return (
    <S.Container>
      <Typography
        variant='Heading1'
        fontWeight='semiBold'>
        정말 위프로를{'\n'}떠나실건가요?
      </Typography>
      <Typography style={{ marginTop: 16, marginBottom: 12 }}>
        계정 탈퇴 신청 전 아래 사항을 확인 부탁드립니다.
      </Typography>
      <S.DescriptionContainer style={{ marginBottom: 6 }}>
        <S.Number>1.</S.Number>
        <S.DescriptionText fontWeight='semiBold'>
          탈퇴 후 15일까지 재로그인을 통해 철회가 가능하며 이후에는 모든 회원 정보가 지체 없이
          파기됩니다.
        </S.DescriptionText>
      </S.DescriptionContainer>
      <S.DescriptionContainer>
        <S.Number>2.</S.Number>
        <S.DescriptionText>
          휴대폰 인증을 통해 생성한 아이디가 여러 개인 경우 1개의 아이디를 탈퇴해도 다른 아이디는
          계속해서 사용 가능합니다.
        </S.DescriptionText>
      </S.DescriptionContainer>

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

export default CancelAccount;

const S = {
  Container: styled.View`
    flex: 1;
    padding: 23px 20px 0;
    color: ${({ theme }) => theme.color.Label.Normal};
    background-color: ${({ theme }) => theme.color.Background.Alternative};
  `,
  Number: styled(Typography)`
    flex-shrink: 0;
    width: 20px;
    height: 20px;
  `,
  DescriptionContainer: styled.View`
    ${flexDirectionRow};
    align-items: flex-start;
  `,
  DescriptionText: styled(Typography)`
    flex-shrink: 1;
    flex-wrap: wrap;
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
