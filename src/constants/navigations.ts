export const MAIN_NAVIGATIONS = {
  HOME: 'index',
  PROJECT: 'project',
  MY: 'my',
} as const;

export type MainNavigations = (typeof MAIN_NAVIGATIONS)[keyof typeof MAIN_NAVIGATIONS];

export const MY_NAVIGATIONS = {
  HOME: 'my',
  JOB: 'job',
  POLICY: 'policy',
  CANCEL_ACCOUNT: 'cancel-account',
};

export const PROJECT_NAVIGATIONS = {
  HOME: 'index',
  CREATE: 'create',
  DELETE: 'delete',
  DETAIL: 'detail',
  REVIEW: 'review',
};

export const REVIEW_NAVIGATIONS = {
  SELECT: 'select',
  CREATE: 'create',
  COMPLETE: 'complete',
};
