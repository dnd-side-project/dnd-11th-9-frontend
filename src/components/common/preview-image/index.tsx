import * as S from './style';

type Props = {
  images: string[];
};

function PreviewImage({ images }: Props) {
  return (
    <S.Container>
      {images.map((image, index) => (
        <S.Image
          resizeMode='cover'
          key={index}
          source={{ uri: image }}
        />
      ))}
    </S.Container>
  );
}

export default PreviewImage;
