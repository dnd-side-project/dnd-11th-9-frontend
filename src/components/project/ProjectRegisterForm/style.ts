import styled, { css } from '@emotion/native';

import {
  flexDirectionColumn,
  flexDirectionRow,
  flexDirectionRowItemsCenter,
} from '@/styles/common';

export const Container = styled.View`
  ${flexDirectionColumn};
  gap: 20px;
  padding: 20px;
`;

export const Form = styled.View`
  ${flexDirectionColumn};
  gap: 36px;
`;

export const InputContainer = styled.View`
  ${flexDirectionColumn};
  gap: 8px;
`;

export const ImageBox = styled.View`
  ${flexDirectionRow};
  gap: 8px;
`;

export const DatePickerBox = styled.View`
  ${flexDirectionRowItemsCenter};
  gap: 8px;
`;

const fontFamlily = css({
  fontFamily: 'Pretendard',
  fontWeight: 400,
});

export const DateSplitText = styled.Text`
  ${fontFamlily};
  font-size: 24px;
  line-height: 29px;
  color: ${({ theme }) => theme.color.Label.Normal};
`;

export const SubmitButtonBox = styled.View`
  padding: 12px 0 52px;
`;

export const UserListSheetOpenButtonContainer = styled.View`
  position: relative;
`;

export const UserListSheetOpenButton = styled.Pressable`
  position: absolute;
  width: 100%;
  height: 55px;
`;

export const BottomSheetBackground = styled.SafeAreaView`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.color.Material.Dimmer};
`;

export const SelectUserList = styled.View`
  ${flexDirectionColumn};
  gap: 8px;
`;

export const SelectUserItem = styled.View`
  padding: 18px 16px;
  background: ${({ theme }) => theme.color.Background.Normal};
  border-radius: 8px;
`;
