import { launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker';
import mime from 'mime';
import { useCallback } from 'react';
import { Platform } from 'react-native';

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
      const formData = new FormData();

      if (Platform.OS === 'web') {
        const fileUri = result.assets[0].uri;
        const fileType = result.assets[0].mimeType;
        const fileName = result.assets[0].fileName ?? 'image.' + fileType?.split('/')[1];

        const response = await fetch(fileUri);
        const blob = await response.blob();
        formData.append('images', blob, fileName);
      }
      if (Platform.OS === 'android') {
        const newImageUri = 'file:///' + result.assets[0].uri.split('file:/').join('');
        // @ts-expect-error : FormData에 append 메소드에 대한 타입 정의가 없어서 ignore 처리
        formData.append('images', {
          uri: newImageUri,
          type: mime.getType(newImageUri) || 'application/octet-stream',
          name: newImageUri.split('/').pop() || 'unknown',
        });
      }
      const { imageUrls } = await uploadImage(formData);
      const imageUrl = imageUrls[0];

      setImage(imageUrl);
    }
  }, []);

  return pickImage;
}
