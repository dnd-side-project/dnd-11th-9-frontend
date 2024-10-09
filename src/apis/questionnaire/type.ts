import type { MemberDTO } from '@/apis/member/type';
import type { CategoryEnum } from '@/enums/categoryEnum';

export type CategoryType = keyof typeof CategoryEnum;

export interface GetCategoryListRequest {
  categories: CategoryType[];
}

type QuestionType = {
  categoryType: CategoryType;
  questions: QuestionnaireType[];
};

type QuestionnaireType = {
  questionId: number;
  question: string;
  options: [string, string, string, string];
};

export interface GetCategoryListResponse {
  allQuestions: QuestionType[];
}

export interface PostCreateReviewFormRequest {
  projectId: number;
  questionIdList: number[];
}

export interface PostCreateReviewFormResponse {
  reviewFormId: number;
}

export interface GetProjectMemberRequest {
  reviewFormId: number;
}

export interface GetProjectMemberResponse {
  memberList: Pick<MemberDTO, 'id' | 'profileUrl' | 'name' | 'tag'>[];
}

export interface PostReviewRequest {
  reviewFormId: number;
  memberIdList: number[];
}
