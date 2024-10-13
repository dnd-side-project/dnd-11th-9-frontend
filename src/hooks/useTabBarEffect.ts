import { useLayoutEffect } from 'react';

import useTabBar from '@/store/useTabBar';

/**
 * 탭바를 숨기고, 다시 보여주는 효과를 주는 훅입니다.
 * @returns {void}
 * @example
 * [hideTabBar, showTabBar] = useTabBar();
 */
export function useTabBarEffect() {
  const { hideTabBar, showTabBar } = useTabBar();

  useLayoutEffect(() => {
    hideTabBar();

    return () => showTabBar();
  }, [hideTabBar, showTabBar]);

  return [hideTabBar, showTabBar];
}
