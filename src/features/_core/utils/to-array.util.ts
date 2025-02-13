export function toArray<T>(input: T): T[] {
  if (!Array.isArray(input)) return [] as T[];
  return input as T[];
}
