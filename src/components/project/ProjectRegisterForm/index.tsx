import { launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker';
import { useState } from 'react';

import SolidButton from '@/components/common/button/SolidButton';
import DateInput from '@/components/common/date-input';
import ImageInput from '@/components/common/image-input';
import InputField from '@/components/common/input-field';
import PreviewImage from '@/components/common/preview-image';
import Typography from '@/components/common/typography';
import { color } from '@/styles/theme';

import * as S from './style';

function ProjectRegisterForm() {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    const result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <S.Container>
      <S.Form>
        <S.InputContainer>
          <Typography
            variant='Body1/Normal'
            fontWeight='semiBold'
            color={color.Label.Normal}>
            프로젝트 이름
          </Typography>
          <InputField placeholder='프로젝트의 이름을 적어주세요' />
        </S.InputContainer>
        <S.InputContainer>
          <Typography
            variant='Body1/Normal'
            fontWeight='semiBold'
            color={color.Label.Normal}>
            프로젝트 정보
          </Typography>
          <InputField placeholder='어떤 프로젝트인가요?' />
        </S.InputContainer>
        <S.InputContainer>
          <Typography
            variant='Body1/Normal'
            fontWeight='semiBold'
            color={color.Label.Normal}>
            프로젝트 이미지
          </Typography>
          <S.ImageBox>
            <ImageInput onChange={pickImage} />
            <PreviewImage images={image ? [image] : []} />
          </S.ImageBox>
        </S.InputContainer>
        <S.InputContainer>
          <Typography
            variant='Body1/Normal'
            fontWeight='semiBold'
            color={color.Label.Normal}>
            기간
          </Typography>
          <S.DatePickerBox>
            <DateInput />
            <S.DateSplitText>-</S.DateSplitText>
            <DateInput />
          </S.DatePickerBox>
        </S.InputContainer>
        <S.InputContainer>
          <Typography
            variant='Body1/Normal'
            fontWeight='semiBold'
            color={color.Label.Normal}>
            프로젝트 링크
          </Typography>
          <InputField placeholder='링크를 입력해주세요' />
        </S.InputContainer>
      </S.Form>
      <S.SubmitButtonBox>
        <SolidButton
          full
          size='large'>
          다음
        </SolidButton>
      </S.SubmitButtonBox>
    </S.Container>
  );
}

export default ProjectRegisterForm;
