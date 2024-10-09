export enum CategoryEnum {
  COMMUNICATION = '커뮤니케이션',
  SKILL = '기술',
  LEADERSHIP = '리더십',
  DOCUMENTATION = '문서화',
  PROBLEM_SOLVING = '문제해결',
  DILIGENCE = '성실성',
  IDEATION = '아이데이션',
  CONSIDERATION = '배려심',
  FOLLOWERSHIP = '팔로워십',
}

export type EngCategoryType = keyof typeof CategoryEnum;
export type KorCategoryType = `${CategoryEnum}`;
