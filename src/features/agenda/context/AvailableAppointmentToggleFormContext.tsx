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
  resetSelectedForm(): void;
};

const Context = createContext<ContextProps | undefined>(undefined);

export const AvailableAppointmentToggleFormContext: React.FC<
  PropsWithChildren
> = ({ children }) => {
  const [selectedForm, setSelectedForm] =
    useState<ContextProps["selectedForm"]>("search");
  const handleToggleSelectedForm = useCallback(() => {
    setSelectedForm((prevValue) =>
      prevValue === "create" ? "search" : "create"
    );
  }, []);
  const resetSelectedForm = useCallback(() => {
    setSelectedForm("search");
  }, []);

  return (
    <Context
      value={{
        handleToggleSelectedForm,
        resetSelectedForm,
        selectedForm,
      }}
    >
      {children}
    </Context>
  );
};

export const useAvailableAppointmentToggleFormContext = () => {
  const context = use(Context);
  if (!context) {
    throw new Error(
      "useAvailableAppointmentToggleFormContext el context solo puede usarse dentro de: AvailableAppointmentToggleFormContext"
    );
  }
  return context;
};
