import type { AxiosResponse } from 'axios';
import * as SecureStore from 'expo-secure-store';

import axiosInstance from '@/apis/instance';
import { STORAGE_KEYS } from '@/constants';

type ResponseToken = {
  accessToken: string;
  refreshToken: string;
};

const getAccessToken = async (): Promise<AxiosResponse<ResponseToken>> => {
  const refreshToken = await SecureStore.getItemAsync(STORAGE_KEYS.REFRESH_TOKEN);

  if (typeof refreshToken !== 'string') throw new Error();

  const { data } = await axiosInstance.get<AxiosResponse<ResponseToken>>('/refreshToken', {
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  });

  return data;
};

type ProfileResponse = {
  userProfile: string;
  userName: string;
};

const getProfile = async (): Promise<AxiosResponse<ProfileResponse>> => {
  const { data } = await axiosInstance.get<AxiosResponse<ProfileResponse>>('/members/me');
  return data;
};

export { getAccessToken, getProfile };

export type { ProfileResponse, ResponseToken };
