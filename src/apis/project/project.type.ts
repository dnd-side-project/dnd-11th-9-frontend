export interface ProjectDTO {
  id: number;
  name: string;
  profile: string;
  start_data: string | Date;
  end_data: string | Date;
  info: string;
  member_num: number;
}
