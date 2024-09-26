import type { ProjectItemType } from '@/components/project/ProjectList';

export const MOCK_PROJECT_ITEM: ProjectItemType = {
  id: 1,
  name: '위프로',
  profile: 'https://picsum.photos/200',
  review_count: 3,
  member_num: 6,
};

export const MOCK_PROJECT_LIST: ProjectItemType[] = [
  {
    id: 1,
    name: '위프로',
    profile: 'https://picsum.photos/200',
    review_count: 3,
    member_num: 6,
  },
  {
    id: 2,
    name: '후피',
    profile: 'https://picsum.photos/200',
    review_count: 1,
    member_num: 3,
  },
  {
    id: 3,
    name: 'Code Red',
    profile: 'https://picsum.photos/200',
    review_count: 2,
    member_num: 3,
  },
  {
    id: 4,
    name: 'Veco',
    profile: 'https://picsum.photos/200',
    review_count: 3,
    member_num: 3,
  },
  {
    id: 5,
    name: 'Zero Waste',
    profile: 'https://picsum.photos/200',
    review_count: 0,
    member_num: 3,
  },
] as const;
