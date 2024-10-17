import type { AxiosResponse } from 'axios';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

import axiosInstance from '@/apis/instance';
import { MEMBER_END_POINT } from '@/apis/member/endPoint';
import type { GetAccessTokenResponse, GetProfileResponse } from '@/apis/member/type';
import { STORAGE_KEYS } from '@/constants';

export const getAccessToken = async () => {
  const refreshToken = await SecureStore.getItemAsync(STORAGE_KEYS.REFRESH_TOKEN);
  const { data } = await axios.post<AxiosResponse<GetAccessTokenResponse>>(
    process.env.EXPO_PUBLIC_SERVER_URL + MEMBER_END_POINT.REFRESH_TOKEN,
    {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    }
  );
  return data;
};

export const getProfile = async () => {
  const { data } = await axiosInstance.get<AxiosResponse<GetProfileResponse>>(MEMBER_END_POINT.ME);
  return data;
};
