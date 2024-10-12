import styled from '@emotion/native';
import type { PropsWithChildren } from 'react';
import { Platform } from 'react-native';

import Typography from '@/components/common/typography';
import { flexDirectionColumnItemsCenter } from '@/styles/common';

const TitleLayout = styled.View`
  padding-top: 12px;
`;

function Title({ children }: PropsWithChildren) {
  return (
    <TitleLayout>
      <Typography
        variant='Headline1'
        fontWeight='semiBold'>
        {children}
      </Typography>
    </TitleLayout>
  );
}

const LeftLayout = styled.View`
  padding-top: ${Platform.OS !== 'ios' ? 12 + 'px' : 6 + 'px'};
  padding-left: 6px;
`;

function Left({ children }: PropsWithChildren) {
  return <LeftLayout>{children}</LeftLayout>;
}

const RightLayout = styled.View`
  padding-top: ${Platform.OS !== 'ios' ? 12 + 'px' : 6 + 'px'};
  padding-right: 6px;
`;

function Right({ children }: PropsWithChildren) {
  return <RightLayout>{children}</RightLayout>;
}

const Button = styled.TouchableOpacity`
  ${flexDirectionColumnItemsCenter};
  width: 40px;
  height: 40px;
`;

const Header = {
  Title,
  Left,
  Right,
  Button,
};

export default Header;
