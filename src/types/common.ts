import type { QueryKey, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';

export type ResponseError = {
  statusCode: number;
  message: string;
  error: string;
};

export type UseMutationCustomOptions<TData = unknown, TVariables = unknown> = Omit<
  UseMutationOptions<TData, ResponseError, TVariables, unknown>,
  'mutationFn'
>;

export type UseQueryCustomOptions<TQueryFnData = unknown, TData = TQueryFnData> = Omit<
  UseQueryOptions<TQueryFnData, ResponseError, TData, QueryKey>,
  'queryKey'
>;
