import queryString, { ParseOptions, StringifyOptions } from "query-string";

export type QueryStringToObjectOptions = ParseOptions;
export type QueryStringToStringOptions = StringifyOptions;

export default class QueryString {
  static readonly toStringOptions: QueryStringToStringOptions = {
    arrayFormat: "separator",
    skipEmptyString: true,
    skipNull: true,
  };

  static readonly toObjectOptions: QueryStringToObjectOptions = {
    arrayFormat: "separator",
    parseBooleans: true,
    parseNumbers: true,
  };

  static toUrlSearchParams(value: Record<string, any> | string): URLSearchParams {
    value = typeof value === "string" ? value : this.toString(value);
    return new URLSearchParams(value);
  }

  static toString(
    obj: Record<string, any> = {},
    options?: QueryStringToStringOptions,
  ): string {
    return queryString.stringify(obj, options ?? this.toStringOptions);
  }

  static toObject<T extends object>(
    query: URLSearchParams | string,
    options?: QueryStringToObjectOptions,
  ): T {
    return queryString.parse(query.toString(), options ?? this.toObjectOptions) as T;
  }

  static withOmitParams<T extends object>(
    omitedParams: (keyof T)[],
    obj: Partial<T>,
  ): Partial<T> {
    const newObj = structuredClone(obj);
    if (omitedParams.length > 0) {
      omitedParams.forEach((omitKey) => {
        delete newObj[omitKey];
      });
    }
    return newObj as Partial<T>;
  }
}
