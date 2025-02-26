import React from "react";

type Props<T> = {
  children(e: T, idx: number): React.ReactNode;
  emptyContent?: React.ReactNode;
  dataset: T[];
};

const ArrayMap = <T,>({ dataset, children, emptyContent }: Props<T>) => {
  return (
    <>
      {dataset.length === 0 &&
        (emptyContent ? (
          typeof emptyContent === "string" ? (
            <li className={EMPTY_CONTENT_STYLES}>{emptyContent}</li>
          ) : (
            emptyContent
          )
        ) : (
          <li className={EMPTY_CONTENT_STYLES}>No hay items...</li>
        ))}
      {dataset.map((el, idx) => children(el, idx))}
    </>
  );
};

export default ArrayMap;

const EMPTY_CONTENT_STYLES = "italic opacity-70";
