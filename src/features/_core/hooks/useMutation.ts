import {
  DefaultError,
  UseMutationOptions,
  UseMutationResult,
  useMutation as useQueryMutation,
} from "@tanstack/react-query";

export default function useMutation<
  TData = unknown,
  TError = DefaultError,
  TVariables = void,
  TContext = unknown,
>(
  options: UseMutationOptions<TData, TError, TVariables, TContext>,
): UseMutationResult<TData, TError, TVariables, TContext> {
  const mutation = useQueryMutation(options);

  return mutation;
}
