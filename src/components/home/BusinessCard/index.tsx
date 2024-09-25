import { memo } from 'react';
import { Image } from 'react-native';

import Typography from '@/components/common/typography';
import { shadow } from '@/styles/shadow';
import { color } from '@/styles/theme';

import * as S from './style';

type Props = {
  name: string;
  projectName: string;
  review: string;
};

function BusinessCard({ name, review, projectName }: Props) {
  return (
    <S.Container style={shadow[2]}>
      <S.NameBox>
        <Typography
          variant='Heading1'
          color={color.Common['0']}
          fontWeight='semiBold'>
          {name}
        </Typography>
      </S.NameBox>
      <Image
        style={{
          width: '100%',
          aspectRatio: 1,
          borderWidth: 0,
        }}
        source={{ uri: require('/assets/images/main-mock.png') }}
        resizeMode='center'
        width={300}
        height={300}
      />
      <S.ReviewBox>
        <Typography
          variant='Body1/Normal'
          fontWeight='semiBold'
          color={color.Common['100']}>
          {review}
        </Typography>
        <Typography
          variant='Caption2'
          color={color.Label.Assistive}>
          #{projectName}
        </Typography>
      </S.ReviewBox>
    </S.Container>
  );
}

export default memo(BusinessCard);
