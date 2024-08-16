import { useQuery } from '@tanstack/react-query';

import { getProjects, type ProjectResponse } from '@/apis/example/project.api';
import type { UseQueryCustomOptions } from '@/types/common';

export function useProject(options?: UseQueryCustomOptions<ProjectResponse>) {
  return useQuery({
    queryKey: ['projects'],
    queryFn: getProjects,
    ...options,
  });
}
