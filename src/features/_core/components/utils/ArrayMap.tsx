import React from "react";
import type { HTMLTags } from "@/config";

type Props<T> = {
  as?: HTMLTags | React.ExoticComponent<{ children?: React.ReactNode }>;
  children(e: T, idx: number): React.ReactNode;
  emptyContent?: string;
  dataset: T[];
};

const ArrayMap = <T,>({
  dataset,
  children,
  emptyContent,
  as: Comp = "li",
}: Props<T>) => {
  return (
    <>
      {dataset.length === 0 && <Comp>{emptyContent ?? "No hay items..."}</Comp>}
      {dataset.map((el, idx) => children(el, idx))}
    </>
  );
};

export default ArrayMap;
