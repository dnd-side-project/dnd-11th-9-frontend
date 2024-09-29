import type { PropsWithChildren } from 'react';

import Typography from '@/components/common/typography';
import * as S from '@/components/project/ProjectRegisterForm/style';
import { color } from '@/styles/theme';

type Props = {
  name: string;
  required?: boolean;
};

function ProjectInputField({ name, required = true, children }: PropsWithChildren<Props>) {
  return (
    <S.InputContainer>
      {required ? (
        <S.RequiredTitleBox>
          <Typography
            variant='Body1/Normal'
            fontWeight='semiBold'
            color={color.Label.Normal}>
            {name}
          </Typography>
          <Typography
            variant='Body1/Normal'
            fontWeight='semiBold'
            color={color.Status.Error}>
            *
          </Typography>
        </S.RequiredTitleBox>
      ) : (
        <Typography
          variant='Body1/Normal'
          fontWeight='semiBold'
          color={color.Label.Normal}>
          {name}
        </Typography>
      )}
      {children}
    </S.InputContainer>
  );
}

export default ProjectInputField;
