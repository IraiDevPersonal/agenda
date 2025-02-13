export function objectToURLSearchParams(obj: Record<string, any> = {}): URLSearchParams {
  const params = new URLSearchParams();

  function appendParam(key: string, value: any) {
    if (value === null || value === undefined) return;

    if (Array.isArray(value)) {
      value.forEach((item) => params.append(key, String(item)));
    } else if (typeof value === "object") {
      Object.entries(value).forEach(([nestedKey, nestedValue]) => {
        appendParam(`${key}[${nestedKey}]`, nestedValue);
      });
    } else {
      params.append(key, String(value));
    }
  }

  Object.entries(obj).forEach(([key, value]) => appendParam(key, value));

  return params;
}
