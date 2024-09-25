import { memo } from 'react';
import { Image } from 'react-native';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';

import Typography from '@/components/common/typography';
import { shadow } from '@/styles/shadow';
import { color } from '@/styles/theme';

import * as S from './style';

type Props = {
  name: string;
  projectName: string;
  review: string;
  isActive?: boolean;
};

function BusinessCard({ name, review, projectName, isActive = false }: Props) {
  const animationStyle = useAnimatedStyle(() => {
    return {
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      bottom: -36,
      left: -16,
      gap: 6,
      width: 210,
      paddingHorizontal: 24,
      paddingVertical: 16,
      borderRadius: 16,
      backgroundColor: color.Label.Strong,
      opacity: withTiming(isActive ? 1 : 0),
    };
  });

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
      <Animated.View style={[animationStyle]}>
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
      </Animated.View>
    </S.Container>
  );
}

export default memo(BusinessCard);
