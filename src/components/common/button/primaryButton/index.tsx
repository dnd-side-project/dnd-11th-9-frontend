import type { ReactNativeStyle } from '@emotion/native';
import styled, { css } from '@emotion/native';
import { LinearGradient } from 'expo-linear-gradient';
import type { PressableProps } from 'react-native';

import Typography from '@/components/common/typography';
import { flexItemCenter } from '@/styles/common';
import { theme } from '@/styles/theme';
import type { PropsNeedChildren } from '@/types';

type Props = {
  width?: ReactNativeStyle['width'];
  height?: ReactNativeStyle['height'];
  status?: keyof typeof VariantStyle;
} & PressableProps;

const VariantStyle = {
  active: css({
    padding: 10,
  }),
  disabled: css({
    backgroundColor: theme.color.Background.Alternative,
  }),
};

/**
 * PrimaryButton
 * @param width 가로의 길이를 입력합니다.
 * @param height 세로의 길이를 입력합니다.
 * @param status 버튼의 상태를 정의합니다.
 * @param children 버튼에 표시할 텍스트를 입력합니다.
 * @param rest  나머지 추가 속성들을 받아옵니다.
 * @constructor
 */
function PrimaryButton({
  width = '100%',
  height = 56,
  status = 'active',
  children,
  ...rest
}: PropsNeedChildren<Props>) {
  return (
    <Container
      disabled={status === 'disabled'}
      style={{ width, height }}
      status={status}
      {...rest}>
      {status === 'active' && (
        <BackGround
          colors={['#7C71F5', '#6E9DF5']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        />
      )}
      <Typography
        variant='Body1/Normal'
        fontWeight='semiBold'
        color={status === 'active' ? 'white' : '#C2C4C8'}>
        {children}
      </Typography>
    </Container>
  );
}

const Container = styled.Pressable<Required<Pick<Props, 'status'>>>`
  ${({ status }) => VariantStyle[status]}
  ${flexItemCenter};
  overflow: hidden;
  border-radius: 100px;
`;

const BackGround = styled(LinearGradient)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export default PrimaryButton;
