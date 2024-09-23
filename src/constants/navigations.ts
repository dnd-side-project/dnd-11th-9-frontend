export const MAIN_NAVIGATIONS = {
  HOME: 'index',
  PROJECT: 'project',
  REVIEW: 'review',
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
};

export const REVIEW_NAVIGATIONS = {
  HOME: 'index',
  CREATE: 'create',
  DELETE: 'delete',
};
