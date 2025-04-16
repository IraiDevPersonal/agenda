import { createContext, use } from "react";

const Context = createContext<{ showProfesionalData: boolean }>({
  showProfesionalData: false,
});

const ShowProfessionalDataContext: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // TODO: definir aqui cuando se mostrara o no la data del profesional segun el tipo de usuario y usuario logeado
  const showProfesionalData = true;
  return <Context value={{ showProfesionalData }}>{children}</Context>;
};

export function useShowProfessionalData() {
  const context = use(Context);
  if (!context) {
    throw new Error(
      "Solo puede acceder al contexto dentro de: ShowProfessionalDataContext",
    );
  }
  return context;
}

export default ShowProfessionalDataContext;
