import { createContext, useContext } from "react";

type ContextProps = {
  showProfesionalData?: boolean;
};

const Context = createContext<ContextProps>({
  showProfesionalData: false,
});

type Props = ContextProps & {
  children: React.ReactNode;
};

export const ViewProfessionalDataContext: React.FC<Props> = ({
  children,
  showProfesionalData,
}) => {
  return <Context value={{ showProfesionalData }}>{children}</Context>;
};

export const useViewProfessionalData = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error(
      "Solo puede acceder al contexto dentro de: ViewProfessionalInfoProvider"
    );
  }
  return context;
};
