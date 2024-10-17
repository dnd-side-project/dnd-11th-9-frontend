const MEMBER_DEFAULT_URL = '/members';

export const MEMBER_END_POINT = {
  RECEIVE_ALARM: `${MEMBER_DEFAULT_URL}/receiveAlarm`,
  PROFILE_IMAGE: `${MEMBER_DEFAULT_URL}/profileImg`,
  REFRESH_TOKEN: `${MEMBER_DEFAULT_URL}/reissue`,
  POSITION: `${MEMBER_DEFAULT_URL}/positions`,
  MEMBERS: MEMBER_DEFAULT_URL,
  ME: `${MEMBER_DEFAULT_URL}/me`,
} as const;
