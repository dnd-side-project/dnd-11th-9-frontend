export type SocialType = 'APPLE' | 'KAKAO';
export type StatusType = 'ACTIVE' | 'INACTIVE';
export type RoleType = 'ADMIN' | 'USER' | 'GUEST';
export type PositionType = 'DEVELOPER' | 'DESIGNER' | 'PM';

export interface MemberDTO {
  id: bigint;
  profile: string;
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
