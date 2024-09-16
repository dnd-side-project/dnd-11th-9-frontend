import { useLayoutEffect } from 'react';

import useTabBar from '@/store/useTabBar';

export function useTabBarEffect() {
  const { hideTabBar, showTabBar } = useTabBar();

  useLayoutEffect(() => {
    hideTabBar();

    return () => showTabBar();
  }, [hideTabBar, showTabBar]);
}
