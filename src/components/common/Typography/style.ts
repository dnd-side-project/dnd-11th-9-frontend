import { css } from '@emotion/native';

import { theme } from '@/styles/theme';

export const TypographyStyle = {
  H1: css({
    fontFamily: 'Pretendard',
    fontSize: theme.typography.FONT_SIZE.H1,
    fontWeight: theme.typography.FONT_WEIGHT.Bold,
  }),
  H2: css({
    fontFamily: 'Pretendard',
    fontSize: theme.typography.FONT_SIZE.H2,
    fontWeight: theme.typography.FONT_WEIGHT.Bold,
  }),
  H3: css({
    fontFamily: 'Pretendard',
    fontSize: theme.typography.FONT_SIZE.H3,
    fontWeight: theme.typography.FONT_WEIGHT.Bold,
  }),
  Subtitle1: css({
    fontFamily: 'Pretendard',
    fontSize: theme.typography.FONT_SIZE.Subtitle1,
    fontWeight: theme.typography.FONT_WEIGHT.Bold,
  }),
  Subtitle2: css({
    fontFamily: 'Pretendard',
    fontSize: theme.typography.FONT_SIZE.Subtitle2,
    fontWeight: theme.typography.FONT_WEIGHT.Bold,
  }),
  Subtitle3: css({
    fontFamily: 'Pretendard',
    fontSize: theme.typography.FONT_SIZE.Subtitle3,
    fontWeight: theme.typography.FONT_WEIGHT.Bold,
  }),
  Body1: css({
    fontFamily: 'Pretendard',
    fontSize: theme.typography.FONT_SIZE.Body1,
    fontWeight: theme.typography.FONT_WEIGHT.Regular,
  }),
  Body2: css({
    fontFamily: 'Pretendard',
    fontSize: theme.typography.FONT_SIZE.Body2,
    fontWeight: theme.typography.FONT_WEIGHT.Regular,
  }),
  Body3: css({
    fontFamily: 'Pretendard',
    fontSize: theme.typography.FONT_SIZE.Body3,
    fontWeight: theme.typography.FONT_WEIGHT.Regular,
  }),
};
