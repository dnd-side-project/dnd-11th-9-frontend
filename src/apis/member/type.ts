export type SocialType = 'APPLE' | 'KAKAO';
export type StatusType = 'ACTIVE' | 'INACTIVE';
export type RoleType = 'ADMIN' | 'USER' | 'GUEST';
export type PositionType = 'DEVELOPER' | 'DESIGNER' | 'PM';

export interface MemberDTO {
  id: bigint;
  profileUrl: string;
  name: string;
  provider: SocialType;
  status: StatusType;
  role: RoleType;
  position: PositionType;
  inactive_at: string | Date;
  create_at: string | Date;
  update_at: string | Date;
  tag: string;
  receive_alarm: boolean;
}

export interface GetAccessTokenResponse {
  accessToken: string;
  refreshToken: string;
}

export interface GetProfileResponse {
  profileUrl: string;
  name: string;
}
