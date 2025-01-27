import type { Option } from "@/config";

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
