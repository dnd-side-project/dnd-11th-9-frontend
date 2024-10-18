export const PROJECT_DEFAULT_URL = '/projects';

export const PROJECT_END_POINT = {
  DETAIL: (id: number | string) => `${PROJECT_DEFAULT_URL}/${id}`,
  MEMBER: (id: number | string) => `${PROJECT_DEFAULT_URL}/${id}/member`,
  ME: `${PROJECT_DEFAULT_URL}/my`,
} as const;
