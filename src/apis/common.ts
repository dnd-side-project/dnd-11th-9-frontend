import axiosInstance from './instance';

export const uploadImage = async (formData: FormData) => {
  try {
    const response = await axiosInstance.post('/images', formData, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const loadImage = async (imageUrl: string) => {
  try {
    const response = await axiosInstance.get(imageUrl);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
