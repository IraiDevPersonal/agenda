import { useDialog } from "@/features/_core/hooks";
import {
  createContext,
  PropsWithChildren,
  use,
  useCallback,
  useState,
} from "react";

type ContextProps = {
  selectedForm: "create" | "search";
  handleToggleSelectedForm(): void;
  handleToggleDialogOpen(): void;
  isDialogOpen: boolean;
};

const Context = createContext<ContextProps | undefined>(undefined);

export const AvailableAppointmentContext: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [isDialogOpen, onToggleDialogOpen] = useDialog();
  const [selectedForm, setSelectedForm] =
    useState<ContextProps["selectedForm"]>("search");
  const handleToggleSelectedForm = useCallback(() => {
    setSelectedForm((prevValue) =>
      prevValue === "create" ? "search" : "create"
    );
  }, []);
  const handleToggleDialogOpen = useCallback(() => {
    setSelectedForm("search");
    onToggleDialogOpen();
  }, [onToggleDialogOpen]);

  return (
    <Context
      value={{
        handleToggleSelectedForm,
        handleToggleDialogOpen,
        selectedForm,
        isDialogOpen,
      }}
    >
      {children}
    </Context>
  );
};

export const useAvailableAppointmentContext = () => {
  const context = use(Context);
  if (!context) {
    throw new Error(
      "el context solo puede usarse dentro de: AvailableAppointmentToggleFormContext"
    );
  }
  return context;
};
