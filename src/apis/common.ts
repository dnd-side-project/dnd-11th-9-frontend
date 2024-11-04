import { AxiosError } from 'axios';

import axiosInstance from './instance';

export const uploadImage = async (formData: FormData) => {
  try {
    const response = await axiosInstance.post('/images', formData);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    } else {
      throw new Error('이미지 업로드 실패');
    }
  }
};

export const loadImage = async (imageUrl: string) => {
  const response = await axiosInstance.get(imageUrl);
  return response.data;
};
