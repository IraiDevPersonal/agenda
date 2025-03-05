import { createContext, use } from "react";
import type { DialogPropsHandler } from "@/config/types";

type ContextProps = DialogPropsHandler;

const Context = createContext<ContextProps | undefined>(undefined);

type Props = DialogPropsHandler & {
  children: React.ReactNode;
};

const DialogContext: React.FC<Props> = ({ children, ...props }) => {
  return <Context value={{ ...props }}>{children}</Context>;
};

export const useDialogContext = () => {
  const context = use(Context);
  if (!context) {
    throw new Error("useDialogContext solo puede usarse dentro de: DialogContext");
  }
  return context;
};

export default DialogContext;
