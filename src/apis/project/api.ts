import type { AxiosResponse } from 'axios';

import axiosInstance from '@/apis/instance';
import { PROJECT_DEFAULT_URL, PROJECT_END_POINT } from '@/apis/project/endPoint';

interface GetProjectDetailResponse {
  name: string;
  desc: string;
  imgUrls: string[];
  startDate: string;
  endDate: string;
  memberList: MemberList[];
  linkList: string;
}

interface MemberList {
  id: number;
  name: string;
  tag: string;
}

export const getProjectDetail = async (id: number | string) => {
  const { data } = await axiosInstance.post<AxiosResponse<GetProjectDetailResponse>>(
    PROJECT_END_POINT.DETAIL(id)
  );
  return data;
};

interface UpdateProjectDetailRequest {
  name: string;
  desc: string;
  imgUrls: string[];
  startDate: string;
  endDate: string;
  memberList: number[];
  link: string;
}

interface UpdateProjectDetailResponse {
  id: number;
}

export const updateProjectDetail = async (
  id: number | string,
  body: UpdateProjectDetailRequest
) => {
  const { data } = await axiosInstance.put<AxiosResponse<UpdateProjectDetailResponse>>(
    PROJECT_END_POINT.DETAIL(id),
    body
  );
  return data;
};

interface DeleteProjectResponse {
  id: number | string;
}

export const deleteProject = async (id: number | string) => {
  const { data } = await axiosInstance.delete<AxiosResponse<DeleteProjectResponse>>(
    PROJECT_END_POINT.DETAIL(id)
  );
  return data;
};

interface GetProjectListResponse {
  name: string;
  memberNum: number;
  imgUrls: string[];
  tag: string;
}

export const getProjectList = async () => {
  const { data } =
    await axiosInstance.get<AxiosResponse<GetProjectListResponse[]>>(PROJECT_DEFAULT_URL);
  return data;
};

interface CreateProjectRequest {
  name: string;
  desc: string;
  imgUrls: string[];
  startDate: string;
  endDate: string;
  memberList: number[];
  link: string;
}

export const createProject = async (body: CreateProjectRequest) => {
  const { data } = await axiosInstance.post<AxiosResponse<UpdateProjectDetailResponse>>(
    PROJECT_DEFAULT_URL,
    body
  );
  return data;
};

export const postNotUsedMember = async (id: number | string) => {
  const { data } = await axiosInstance.post<AxiosResponse<UpdateProjectDetailResponse>>(
    PROJECT_END_POINT.MEMBER(id)
  );
  return data;
};

interface GetMyProjectResponse {
  id: number | string;
  name: string;
  memberNum: number;
  imgUrl: string;
  reviewCompleteCount: number;
}

export const getMyProject = async () => {
  const { data } = await axiosInstance.get<AxiosResponse<GetMyProjectResponse[]>>(
    PROJECT_END_POINT.ME
  );
  return data;
};
