import Divider from '@/components/common/divider';
import Typography from '@/components/common/typography';
import { color } from '@/styles/theme';

import * as S from './ConfirmModal.style';

type Props = {
  onConfirm: () => void;
  onCancel: () => void;
  visible: boolean;
  title: string;
  description: string;
};

function ConfirmModal({ visible, description, onConfirm, onCancel, title }: Props) {
  if (!visible) return null;
  return (
    <S.Layout>
      <S.Backdrop />
      <S.Container>
        <S.InfoBox>
          <Typography
            variant='Headline1'
            fontWeight='semiBold'>
            {title}
          </Typography>
          <Typography
            style={{ textAlign: 'center' }}
            variant='Body2/Normal'
            color={color.Label.Alternative}
            fontWeight='medium'>
            {description}
          </Typography>
        </S.InfoBox>

        <Divider
          style={{ marginTop: 26 }}
          type='horizontal'
        />

        <S.ButtonBox>
          <S.ActionButton
            $divider={true}
            onPress={onCancel}>
            <Typography
              color={color.Label.Alternative}
              style={{ textAlign: 'center' }}
              variant='Body2/Normal'
              fontWeight='medium'>
              취소
            </Typography>
          </S.ActionButton>

          <Divider type='vertical' />

          <S.ActionButton
            $divider={false}
            onPress={onConfirm}>
            <Typography
              variant='Body2/Normal'
              fontWeight='medium'>
              확인
            </Typography>
          </S.ActionButton>
        </S.ButtonBox>
      </S.Container>
    </S.Layout>
  );
}

export default ConfirmModal;
