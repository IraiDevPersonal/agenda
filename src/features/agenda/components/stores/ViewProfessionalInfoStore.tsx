import { createContext, useContext } from "react";

type ViewProfessionalInfo = {
  showProfesionalData?: boolean;
};

const ViewProfessionalInfoContext = createContext<ViewProfessionalInfo>({
  showProfesionalData: false,
});

type Props = ViewProfessionalInfo & {
  children: React.ReactNode;
};

export const ViewProfessionalInfoProvider: React.FC<Props> = ({
  children,
  showProfesionalData,
}) => {
  return (
    <ViewProfessionalInfoContext value={{ showProfesionalData }}>
      {children}
    </ViewProfessionalInfoContext>
  );
};

export const useViewProfessionalInfo = () => {
  const context = useContext(ViewProfessionalInfoContext);
  if (!context) {
    throw new Error(
      "Solo puede acceder al contexto dentro de: ViewProfessionalInfoProvider"
    );
  }
  return context;
};
