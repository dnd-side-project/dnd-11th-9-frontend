export const SITE_URLS = {
  MAIN: '/',
  SIGN_IN: '/sign-in',
  ON_BOARDING: '/onboarding',
} as const;

export const PROJECT_URLS = {
  PROJECT_HOME: '/project',
  PROJECT_CREATE: '/project/create',
  PROJECT_DETAIL: '/project/[id]/detail',
  PROJECT_REVIEW: '/project/[id]/review',
  PROJECT_REVIEW_CREATE: '/project/[id]/review/create',
} as const;
