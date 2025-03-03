import {
  DefaultError,
  QueryKey,
  UseQueryOptions,
  UseQueryResult,
  useQuery as useReactQuery,
} from "@tanstack/react-query";

export default function useQuery<
  TQueryFnData = unknown,
  TError = DefaultError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = ValidQueryKeys[],
>(
  options: UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
): UseQueryResult<TData, TError> {
  const query = useReactQuery(options);

  return query;
}

type ValidQueryKeys =
  | "agenda"
  | "calendar"
  | "appointments"
  | "proffesions-filters"
  | "proffesionals-filters";
