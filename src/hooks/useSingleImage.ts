import { launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker';
import { useCallback } from 'react';

/**
 * @author Jihyeong
 * @description 이미지를 하나만 선택하는 훅
 * @example
 * const pickImage = useSingleImage();
 */

export function useSingleImage() {
  const pickImage = useCallback(async (setImage: (image: string) => void) => {
    const result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }, []);

  return pickImage;
}
