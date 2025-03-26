import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  actionFn(value: string): void;
  defaultValue?: string;
  delay?: number;
};

export default function useDebounce({ delay = 500, actionFn, defaultValue }: Props) {
  const [value, setValue] = useState<string>(defaultValue ?? "");
  const timerRef = useRef<NodeJS.Timeout>(undefined);

  const handleAction = useCallback(() => {
    actionFn(value);
  }, [actionFn, value]);

  const onValueChange = useCallback((value: string) => {
    setValue(value);
  }, []);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(handleAction, delay);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [handleAction, delay]);

  return {
    onValueChange,
    handleAction,
    value,
  };
}
