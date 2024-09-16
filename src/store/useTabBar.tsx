import { create } from 'zustand';

type TabBarStore = {
  isVisible: boolean;
  showTabBar: () => void;
  hideTabBar: () => void;
};

const useTabBar = create<TabBarStore>((set) => ({
  isVisible: true,
  showTabBar: () => set({ isVisible: true }),
  hideTabBar: () => set({ isVisible: false }),
}));

export default useTabBar;
