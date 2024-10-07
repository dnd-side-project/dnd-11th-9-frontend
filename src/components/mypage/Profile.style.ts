import styled from '@emotion/native';

import { flexDirectionColumnItemsCenter } from '@/styles/common';

export const ProfileContainer = styled.View`
  ${flexDirectionColumnItemsCenter};
  gap: 12px;
  padding: 0 20px;
  margin-top: 36px;
  margin-bottom: 20px;
`;

export const ProfileImageContainer = styled.View`
  ${flexDirectionColumnItemsCenter};
  position: relative;
  width: 94px;
  height: 94px;
  border-radius: 94px;
`;

export const CameraIcon = styled.Pressable`
  position: absolute;
  right: -7px;
  bottom: 0;
  width: 40px;
  height: 40px;
  padding: 8px;
  background-color: ${({ theme }) => theme.color.Background.Alternative};
  border: 1px solid ${({ theme }) => theme.color.Line.Normal};
  border-radius: 22.5px;
  ${flexDirectionColumnItemsCenter};
`;

export const ProfileImage = styled.Image`
  position: relative;
  width: 100%;
  height: 100%;
  border: 1.5px solid ${({ theme }) => theme.color.Line.Normal};
  border-radius: 94px;
`;

export const ProfileInfo = styled.View`
  ${flexDirectionColumnItemsCenter};
  gap: 4px;
  padding: 10px 0;
`;
