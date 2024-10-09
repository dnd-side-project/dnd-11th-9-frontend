import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

import { getAccessToken, getProfile } from '@/apis/member/api';
import { STORAGE_KEYS } from '@/constants';
import { NUMBERS } from '@/constants/numbers';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { setStorageItemAsync } from '@/hooks';
import type { UseQueryCustomOptions } from '@/types/common';
import { removeHeader, setHeader } from '@/utils/setHeader';

function useGetProfile(queryOptions?: UseQueryCustomOptions) {
  return useQuery({
    queryFn: getProfile,
    queryKey: [QUERY_KEYS.AUTH, QUERY_KEYS.GET_PROFILE],
    ...queryOptions,
  });
}

function useGetRefreshToken() {
  const { data, isSuccess, isError, isPending } = useQuery({
    queryKey: [QUERY_KEYS.AUTH, QUERY_KEYS.GET_ACCESS_TOKEN],
    queryFn: getAccessToken,
    staleTime: NUMBERS.ACCESS_TOKEN_EXPIRATION,
    refetchInterval: NUMBERS.ACCESS_TOKEN_EXPIRATION,
    refetchOnReconnect: true,
    refetchIntervalInBackground: true,
  });

  useEffect(() => {
    if (isSuccess) {
      const {
        data: { accessToken, refreshToken },
      } = data;
      setHeader('Authorization', `Bearer ${accessToken}`);
      setStorageItemAsync(STORAGE_KEYS.REFRESH_TOKEN, refreshToken);
    }
  }, [data, isSuccess]);

  useEffect(() => {
    if (isError) {
      removeHeader('Authorization');
      setStorageItemAsync(STORAGE_KEYS.REFRESH_TOKEN, null);
    }
  }, [isError]);

  return { isSuccess, isError, isPending };
}

function useAuth() {
  const refreshTokenQuery = useGetRefreshToken();
  const getProfileQuery = useGetProfile({
    enabled: refreshTokenQuery.isSuccess,
  });
  const isLogin = getProfileQuery.isSuccess;

  return {
    getProfileQuery,
    isLogin,
  };
}

export default useAuth;
