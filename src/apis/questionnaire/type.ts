import type { MemberDTO } from '@/apis/member/type';
import type { EngCategoryType } from '@/enums/categoryEnum';

export type QuestionType = {
  categoryType: EngCategoryType;
  questions: QuestionnaireType[];
};

export type QuestionnaireType = {
  questionId: number;
  question: string;
  options: { content: string }[];
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
