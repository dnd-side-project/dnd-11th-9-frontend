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

      const file = new File([fileUri], 'image.jpg', { type: 'image/jpeg' });
      const formData = new FormData();
      formData.append('images', file);

      const { imageUrls } = await uploadImage(formData);
      const imageUrl = imageUrls[0];

      setImage(imageUrl);
    }
  }, []);

  return pickImage;
}
