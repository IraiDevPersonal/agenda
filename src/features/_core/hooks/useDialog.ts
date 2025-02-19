import { useState } from "react";

export default function useDialog(initialIsOpen: boolean = false) {
  const [isOpen, setIsOpen] = useState(initialIsOpen);

  const toggleOpen = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return [isOpen, toggleOpen] as const;
}
