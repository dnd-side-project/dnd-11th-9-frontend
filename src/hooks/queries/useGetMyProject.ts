import { useQuery } from '@tanstack/react-query';

import type { GetMyProjectResponse } from '@/apis/project/api';
import { getMyProject } from '@/apis/project/api';
import type { UseQueryCustomOptions } from '@/types/common';

export function useGetMyProject(queryOptions?: UseQueryCustomOptions<GetMyProjectResponse[]>) {
  return useQuery({
    ...queryOptions,
    queryKey: ['myProject'],
    queryFn: getMyProject,
  });
}
