import React from "react";

type Props<T> = {
  as?:
    | keyof React.JSX.IntrinsicElements
    | React.ExoticComponent<{ children?: React.ReactNode }>;
  dataset: T[];
  children(e: T, idx: number): React.ReactNode;
  emptyContent?: string;
};

export const ArrayMap = <T,>({
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
