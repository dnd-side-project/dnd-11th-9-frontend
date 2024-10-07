import type { ProjectDetailType } from '@/components/project/ProjectDetail';
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

export const MOCK_PROJECT_DETAIL: ProjectDetailType = {
  id: 1,
  name: '위프로',
  description: '팀원이 만들어주는 명함 서비스',
  profile: 'https://picsum.photos/200',
  startDate: '24.07.01',
  endDate: '24.09.30',
  review_count: 4,
  userList: [
    {
      id: 1,
      name: '이지형',
    },
    {
      id: 2,
      name: '이예지',
    },
    {
      id: 3,
      name: '양의진',
    },
    {
      id: 4,
      name: '조민제',
    },
    {
      id: 5,
      name: '김소현',
    },
    {
      id: 6,
      name: '김희진',
    },
  ],
  link: 'https://www.naver.com',
} as const;
