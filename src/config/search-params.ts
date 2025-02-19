import queryString, { ParseOptions } from "query-string";

export type QueryParamsToObjetOptions = ParseOptions;

export default class SearchParams {
  public static getAsObject<T extends object>(defaultValues: Record<string, any> = {}) {
    const asObject = this.toObject<T>(window.location.search);
    return { ...defaultValues, ...asObject };
  }

  public static getAsURLSearchParams() {
    return new URLSearchParams(window.location.search);
  }

  public static toSearchParams(obj: Record<string, any> = {}): URLSearchParams {
    return new URLSearchParams(this.toString(obj));
  }

  public static toString(obj: Record<string, any> = {}): string {
    return queryString.stringify(obj, { skipNull: true, skipEmptyString: true });
  }

  public static toObject<T extends object>(
    query: URLSearchParams | string,
    options?: QueryParamsToObjetOptions,
  ): T {
    return queryString.parse(
      query.toString(),
      options ?? { parseBooleans: true, parseNumbers: true },
    ) as T;
  }
}
