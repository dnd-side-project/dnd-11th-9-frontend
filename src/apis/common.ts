import axiosInstance from './instance';

export const uploadImage = async (formData: FormData) => {
  const response = await axiosInstance.post('/images', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const loadImage = async (imageUrl: string) => {
  const response = await axiosInstance.get(imageUrl);
  return response.data;
};
