import type { ReactNativeStyle } from '@emotion/native';
import { css } from '@emotion/native';
import styled from '@emotion/native';
import { Platform, type PressableProps } from 'react-native';

import Typography from '@/components/common/typography';
import type { PropsNeedChildren } from '@/types';

type Props = {
  width?: ReactNativeStyle['width'];
  height?: ReactNativeStyle['height'];
} & PressableProps;

/**
 * PrimaryButton
 * @param width 가로의 길이를 입력합니다.
 * @param height 세로의 길이를 입력합니다.
 * @param status 버튼의 상태를 정의합니다.
 * @param children 버튼에 표시할 텍스트를 입력합니다.
 * @param rest  나머지 추가 속성들을 받아옵니다.
 * @constructor
 */
function OutLineButton({
  width = '100%',
  height = 52,
  children,
  ...rest
}: PropsNeedChildren<Props>) {
  return (
    <Container
      style={{ width, height }}
      {...rest}>
      <ShadowBackGroundTop />
      <ShadowBackGroundBottom />
      <Typography
        variant='Body1/Normal'
        fontWeight='semiBold'
        color='black'>
        {children}
      </Typography>
    </Container>
  );
}

const absoluteObjectFullShadow = css`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 32px;
`;

const iosTopShadow = css`
  shadow-offset: -7px -2px;
  shadow-opacity: 0.15;
  shadow-blur: 8px;
  shadow-radius: 32px;
`;
const iosBottomShadow = css`
  shadow-offset: 2px 5px;
  shadow-opacity: 0.15;
  shadow-blur: 10px;
  shadow-radius: 32px;
`;

const Container = styled.Pressable`
  position: relative;
  display: inline-flex;
  place-items: center center;
  justify-content: center;
  padding: 6px 32px;
  background: white;
  border-radius: 32px;
`;

const ShadowBackGroundTop = styled.View`
  ${absoluteObjectFullShadow};
  shadow-color: rgb(122 74 255 / 1500%);
  ${Platform.OS !== 'ios' ?? iosTopShadow}
`;

const ShadowBackGroundBottom = styled.View`
  ${absoluteObjectFullShadow};
  shadow-color: rgb(26 117 255 / 1500%);
  ${Platform.OS === 'android' ? 'elevation: 5' : iosBottomShadow}
`;

export default OutLineButton;
