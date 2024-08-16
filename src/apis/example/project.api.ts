import ApiInstance from '@/apis/instance';
import type { ProjectDto } from '@/types/project.dto';

interface ProjectInfo extends ProjectDto {
  userCount: number;
  hasReview: boolean;
}

interface ProjectResponse {
  projects: ProjectInfo[];
}

export function getProjects() {
  return ApiInstance.get<ProjectResponse>('/projects');
}
