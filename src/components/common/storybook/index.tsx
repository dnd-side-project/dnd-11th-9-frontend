import Typography from '@/components/common/typography';

import * as S from './style';
import { Chip } from './style';

type Props = {
  title: string;
  variant: string[];
};

function Description({ title, variant }: Props) {
  return (
    <S.DescriptionContainer>
      <Typography fontWeight='medium'>{title + ' = '}</Typography>
      {variant.map((item, index) => (
        <Chip key={index}>
          <Typography fontWeight='normal'>{item}</Typography>
        </Chip>
      ))}
    </S.DescriptionContainer>
  );
}

const Storybook = Object.assign(S.Container, {
  Row: S.Row,
  Description,
});

export default Storybook;
