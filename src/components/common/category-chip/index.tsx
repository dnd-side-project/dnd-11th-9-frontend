import type { ReactNativeStyle } from '@emotion/native';
import { css } from '@emotion/native';
import { memo, useMemo } from 'react';
import Svg, { Ellipse, Path } from 'react-native-svg';

import Typography from '@/components/common/typography';
import { shadow } from '@/styles/shadow';
import { color } from '@/styles/theme';

import * as S from './style';

type Category = '기술' | '커뮤니케이션' | '성실성' | '협업' | '문서화' | '시간관리' | '리더십';

type Props = {
  onboarding?: boolean;
  isActive?: boolean;
  hasIcon?: boolean;
  category: Category;
};

const ActiveStyle: Record<Category, ReactNativeStyle> = {
  기술: css`
    background: ${color.Blue['95']};
    border: 1px solid ${color.Blue['90']};
  `,
  성실성: css`
    background: ${color.Pink['95']};
    border: 1px solid ${color.Pink['90']};
  `,
  협업: css`
    background: ${color.Orange['95']};
    border: 1px solid ${color.Orange['90']};
  `,
  문서화: css`
    background: ${color.Red['95']};
    border: 1px solid ${color.Red['90']};
  `,
  커뮤니케이션: css`
    background: ${color.LightBlue['95']};
    border: 1px solid ${color.LightBlue['90']};
  `,
  시간관리: css`
    background: ${color.Violet['95']};
    border: 1px solid ${color.Violet['90']};
  `,
  리더십: css`
    background: #e6fad9;
    border: 1px solid #c3f0a3;
  `,
};

function CategoryChip({ category, onboarding = false, hasIcon = true, isActive = false }: Props) {
  const Icon = useMemo(() => {
    switch (category) {
      case '기술':
        return (
          <Svg
            width='22'
            height='21'
            viewBox='0 0 22 21'
            fill='none'>
            <Path
              d='M13.2546 -0.00292969H8.52714V4.72447H13.2546V-0.00292969ZM13.2546 16.1794H8.52719V20.9068H13.2546V16.1794ZM21.3457 8.08818V12.8156L16.6183 12.8156V8.08818H21.3457ZM5.16346 12.8156V8.08818H0.436035L0.436035 12.8156L5.16346 12.8156ZM16.6122 1.38781L19.955 4.73059L16.6122 8.07337L13.2694 4.73059L16.6122 1.38781ZM8.51225 16.1732L5.16946 12.8304L1.82666 16.1732L5.16946 19.516L8.51225 16.1732ZM19.9549 16.1733L16.6121 19.5161L13.2693 16.1733L16.6121 12.8305L19.9549 16.1733ZM5.16956 8.0733L8.51235 4.73053L5.16956 1.38775L1.82677 4.73052L5.16956 8.0733Z'
              fill={color.Blue['80']}
            />
          </Svg>
        );
      case '커뮤니케이션':
        return (
          <Svg
            width='21'
            height='20'
            viewBox='0 0 21 20'
            fill='none'>
            <Path
              d='M13.2129 6.62161C13.2129 6.83871 13.202 7.05324 13.1805 7.26468C13.4767 7.22199 13.7795 7.19989 14.0874 7.19989C17.567 7.19989 20.3878 10.0206 20.3878 13.5002C20.3878 16.9798 17.567 19.8005 14.0874 19.8005C10.6079 19.8005 7.78711 16.9798 7.78711 13.5002C7.78711 13.2831 7.79809 13.0686 7.81953 12.8571C7.52339 12.8998 7.22059 12.9219 6.91263 12.9219C3.43305 12.9219 0.612305 10.1012 0.612305 6.62161C0.612305 3.14204 3.43305 0.321289 6.91263 0.321289C10.3922 0.321289 13.2129 3.14204 13.2129 6.62161ZM13.1805 7.26465C12.8887 10.1422 10.6606 12.4475 7.81946 12.8571C8.11118 9.97955 10.3393 7.67423 13.1805 7.26465Z'
              fill={color.LightBlue['80']}
            />
          </Svg>
        );
      case '성실성':
        return (
          <Svg
            width='16'
            height='19'
            viewBox='0 0 16 19'
            fill='none'>
            <Path
              d='M9.58994 11.0334C11.8598 10.3262 13.5076 8.20841 13.5076 5.70575C13.5076 2.6244 11.0096 0.126465 7.92827 0.126465C4.84692 0.126465 2.34899 2.6244 2.34899 5.70575C2.34899 8.20841 3.99677 10.3262 6.26661 11.0334L0.146484 11.0334C0.146484 13.0873 0.962402 15.0571 2.41475 16.5095C3.86709 17.9618 5.83689 18.7777 7.89081 18.7777C9.94473 18.7777 11.9145 17.9618 13.3669 16.5095C14.8192 15.0571 15.6351 13.0873 15.6351 11.0334H9.58994Z'
              fill={color.Pink['80']}
            />
          </Svg>
        );
      case '협업':
        return (
          <Svg
            width='16'
            height='21'
            viewBox='0 0 16 21'
            fill='none'>
            <Path
              d='M7.18889 2.94687C8.26063 1.09056 10.4911 0.320327 12.4392 1.02238C12.6231 1.07548 12.8537 1.1822 13.1456 1.35077C13.4376 1.51934 13.6453 1.66566 13.7832 1.79835C15.3653 3.13443 15.8135 5.4512 14.7417 7.30751C13.6752 9.15488 12.361 9.41819 10.6255 9.7659L10.6254 9.76592C9.82079 9.92712 8.92563 10.1065 7.9226 10.4702C8.10908 11.5207 8.40133 12.3856 8.66403 13.163L8.66405 13.1631C9.23066 14.8399 9.65973 16.1097 8.59315 17.957C7.5214 19.8133 5.29092 20.5836 3.34282 19.8815C3.15894 19.8284 2.92837 19.7217 2.6364 19.5531C2.34443 19.3846 2.13673 19.2382 1.9988 19.1056C0.416754 17.7695 -0.0314445 15.4527 1.0403 13.5964C2.10688 11.749 3.42106 11.4857 5.15655 11.138L5.1566 11.138C5.96124 10.9768 6.85641 10.7974 7.85944 10.4337C7.67296 9.38318 7.38071 8.51831 7.118 7.7409L7.11798 7.74085C6.55137 6.06401 6.12231 4.79424 7.18889 2.94687Z'
              fill={color.Orange['80']}
            />
          </Svg>
        );
      case '문서화':
        return (
          <Svg
            width='16'
            height='19'
            viewBox='0 0 16 19'
            fill='none'>
            <Path
              d='M0.533706 0.588867H8.36408L15.2479 6.49773H8.36415L15.2479 12.4065H8.36408L15.2479 18.3154H7.41754L0.533691 12.4065H7.41752L0.533691 6.49766H7.41747L0.533706 0.588867Z'
              fill={color.Red['80']}
            />
          </Svg>
        );
      case '시간관리':
        return (
          <Svg
            width='21'
            height='21'
            viewBox='0 0 21 21'
            fill='none'>
            <Path
              d='M20.9585 10.3962C20.9585 12.3874 20.368 14.3339 19.2618 15.9895C18.1555 17.6451 16.5832 18.9355 14.7436 19.6975C12.904 20.4595 10.8797 20.6589 8.92677 20.2704C6.97384 19.882 5.17996 18.9231 3.77198 17.5151C2.364 16.1071 1.40515 14.3133 1.01669 12.3603C0.628227 10.4074 0.8276 8.38314 1.58959 6.54352C2.35159 4.70391 3.64198 3.13156 5.29759 2.02531C6.95321 0.919069 8.89968 0.328613 10.8909 0.328613L10.8909 10.3962H20.9585Z'
              fill={color.Violet['80']}
            />
          </Svg>
        );
      case '리더십':
        return (
          <Svg
            width='17'
            height='19'
            viewBox='0 0 17 19'
            fill='none'>
            <Ellipse
              cx='8.49993'
              cy='9.39635'
              rx='6.96989'
              ry='9.9677'
              transform='rotate(-30 8.49993 9.39635)'
              fill='#AFF48D'
            />
          </Svg>
        );
    }
  }, [category]);

  return (
    <S.Container
      $onboarding={onboarding}
      $isActive={isActive && ActiveStyle[category]}
      style={shadow[2]}>
      {hasIcon && <S.IconWrapper>{Icon}</S.IconWrapper>}
      <Typography
        color={color.Label.Normal}
        variant='Body1/Normal'
        fontWeight='semiBold'>
        {category}
      </Typography>
    </S.Container>
  );
}

export default memo(CategoryChip);
