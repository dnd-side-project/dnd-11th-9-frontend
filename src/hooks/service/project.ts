import { useQuery } from '@tanstack/react-query';

import { getProjects } from '@/apis/example/project.api';
import type { UseQueryCustomOptions } from '@/types/common';

export function useProject(options?: UseQueryCustomOptions) {
  return useQuery({
    queryKey: ['projects'],
    queryFn: getProjects,
    ...options,
  });
}
