import axiosInstance from '@/apis/instance';
import type { GetCategoryListResponse } from '@/apis/questionnaire/type';
import type { EngCategoryType } from '@/enums/categoryEnum';

export const getCategoryListRequest = async (categories: EngCategoryType[]) => {
  const { data } = await axiosInstance.get<GetCategoryListResponse>(
    `/questions/categories?categories=${categories.join(',')}`
  );
  return data;
};
