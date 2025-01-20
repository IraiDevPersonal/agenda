import type { CustomLinkProps, Option } from "@/config";

export function generatePath({ to, params, query }: CustomLinkProps) {
  const path: string = to.replace(/:([^/]+)/g, (_, key) => {
    if (!params || !(key in params)) {
      throw new Error(
        `falta el param: "${key}" en la prop "params (object)", para la ruta: "${to} en el componente LinkRoute/NavLinkRoute"`
      );
    }
    return (params as any)[key];
  });

  if (query === undefined) return path;
  if (typeof query === "string" && query.length > 0) return `${path}?${query}`;
  if (Object.keys(query).length > 0) {
    const queryToString = Object.entries(query)
      .map(([k, v]) => `${k}=${v}`)
      .join("&");
    return `${path}?${queryToString}`;
  }
  return path;
}

type CreateOptionProps = {
  options: Option[];
  customLabel?: Option["label"];
  customValue?: Option["value"];
};

export function createOptions(
  { options, customLabel, customValue }: CreateOptionProps,
  shouldContainEmptyOption: boolean = false
) {
  const emptyOption: Option = {
    label: customLabel ?? "Sin selección",
    value: customValue ?? "",
  };
  if (shouldContainEmptyOption || customLabel || customValue) {
    return [emptyOption, ...options];
  }
  return options;
}
