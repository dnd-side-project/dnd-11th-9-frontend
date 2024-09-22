import styled from '@emotion/native';

import { flexDirectionColumn, flexDirectionRowItemsCenter } from '@/styles/common';

export const Container = styled.View`
  ${flexDirectionColumn};
  gap: 16px;
`;

export const ActionBox = styled.View`
  ${flexDirectionRowItemsCenter};
  justify-content: space-between;
  width: 100%;
  padding: 0 12px;
`;

export const Inner = styled.View`
  padding: 20px;
`;

export const UserItem = styled.View`
  ${flexDirectionRowItemsCenter};
  justify-content: space-between;
`;

export const UserListBox = styled.View`
  ${flexDirectionColumn};
  gap: 16px;
`;

export const UserProfileImage = styled.Image`
  width: 48px;
  height: 48px;
  border: 1px solid ${({ theme }) => theme.color.Line.Normal};
  border-radius: 8px;
`;

export const ProfileBox = styled.View`
  ${flexDirectionRowItemsCenter};
  gap: 12px;
`;

export const UserTextContainer = styled.View`
  ${flexDirectionRowItemsCenter};
`;
