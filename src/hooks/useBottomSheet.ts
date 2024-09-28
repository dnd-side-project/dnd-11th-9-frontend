import type { BottomSheetModal } from '@gorhom/bottom-sheet';
import type { RefObject } from 'react';
import { useCallback, useRef, useState } from 'react';

/**
 * @author Jihyeong
 * @description BottomSheet를 사용하기 위한 커스텀 훅
 * @example
 * const [isOpen, bottomSheetRef, openBottomSheet, closeBottomSheet] = useBottomSheet();
 */
export function useBottomSheet(): [
  boolean,
  RefObject<BottomSheetModal>,
  (selectIndex: number) => void,
  () => void,
] {
  const [isOpen, setIsOpen] = useState(false);
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const openBottomSheet = useCallback((selectIndex: number) => {
    setIsOpen(true);
    bottomSheetRef.current?.snapToIndex(selectIndex);
  }, []);

  const closeBottomSheet = useCallback(() => {
    setIsOpen(false);
    bottomSheetRef.current?.close();
  }, []);

  return [isOpen, bottomSheetRef, openBottomSheet, closeBottomSheet];
}
