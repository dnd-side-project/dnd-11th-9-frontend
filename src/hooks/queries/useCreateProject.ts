import { useMutation } from '@tanstack/react-query';

import { createProject } from '@/apis/project/api';
import type { UseMutationCustomOptions } from '@/types/common';

export function useCreateProject(queryOptions?: UseMutationCustomOptions) {
  return useMutation({
    mutationFn: createProject,
    ...queryOptions,
  });
}
