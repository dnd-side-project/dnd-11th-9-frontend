import { useSuspenseQuery } from '@tanstack/react-query';

import { getCategoryListRequest } from '@/apis/questionnaire/api';
import type { GetCategoryListResponse } from '@/apis/questionnaire/type';
import { QUERY_KEYS } from '@/constants/queryKeys';
import type { EngCategoryType } from '@/enums/categoryEnum';
import type { UseQueryCustomOptions } from '@/types/common';

function useGetCategory(
  categories: EngCategoryType[],
  queryOptions?: UseQueryCustomOptions<GetCategoryListResponse>
) {
  return useSuspenseQuery({
    queryKey: [QUERY_KEYS.GET_CATEGORY_LIST, ...categories],
    queryFn: () => getCategoryListRequest(categories),
    ...queryOptions,
  });
}

export default useGetCategory;
