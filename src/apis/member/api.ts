import type { AxiosResponse } from 'axios';
import * as SecureStore from 'expo-secure-store';

import axiosInstance from '@/apis/instance';
import type { GetAccessTokenResponse, GetProfileResponse } from '@/apis/member/type';
import { STORAGE_KEYS } from '@/constants';

export const getAccessToken = async () => {
  const refreshToken = await SecureStore.getItemAsync(STORAGE_KEYS.REFRESH_TOKEN);

  if (typeof refreshToken !== 'string') throw new Error();

  const { data } = await axiosInstance.get<AxiosResponse<GetAccessTokenResponse>>('/refreshToken', {
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  });

  return data;
};

export const getProfile = async () => {
  const { data } = await axiosInstance.get<AxiosResponse<GetProfileResponse>>('/members/me');
  return data;
};
