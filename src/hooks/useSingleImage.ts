import { AxiosError } from 'axios';
import { launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker';
import { useCallback } from 'react';

import { uploadImage } from '@/apis/common';

/**
 * @author Jihyeong
 * @description 이미지를 하나만 선택하는 훅
 * @example
 * const pickImage = useSingleImage();
 */

export function useSingleImage() {
  const pickImage = useCallback(async (setImage: (image: File) => void) => {
    const result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled && result.assets[0]) {
      const fileUri = result.assets[0].uri;
      const fileType = result.assets[0].mimeType;
      const fileName = result.assets[0].fileName ?? 'image.' + fileType?.split('/')[1];

      const formData = new FormData();

      try {
        const response = await fetch(fileUri);
        const blob = await response.blob();
        formData.append('images', blob, fileName);

        const { imageUrls } = await uploadImage(formData);
        const imageUrl = imageUrls[0];

        setImage(imageUrl);
      } catch (error) {
        if (error instanceof AxiosError) {
          throw new Error(error.response?.data.message);
        }
      }
    }
  }, []);

  return pickImage;
}
