import {
  // DefaultError,
  type QueryKey,
  type UseQueryOptions,
  type UseQueryResult,
  useQuery as useReactQuery,
} from "@tanstack/react-query";
import Notify from "@/config/pluggins/notify";
import type { HttpError } from "@/config/types";
export default function useQuery<
  TQueryFnData = unknown,
  // TError = HttpError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = ValidQueryKeys[],
>(
  options: UseQueryOptions<TQueryFnData, HttpError, TData, TQueryKey>,
): UseQueryResult<TData, HttpError> {
  const query = useReactQuery({
    throwOnError(error) {
      Notify.error(error.message, { duration: 5000 });
      // TODO: return false para que la aplicacion no caiga despues del error
      return false;
    },
    ...options,
  });

  return query;
}

type ValidQueryKeys =
  | "agenda"
  | "calendar"
  | "appointments"
  | "proffesions-filters"
  | "proffesionals-filters";
