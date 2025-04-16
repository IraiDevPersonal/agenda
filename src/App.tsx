import { QueryClientProvider } from "@tanstack/react-query";
import agendaQueryClient from "./config/pluggins/agenda-query-client";
import AppRoutes from "@/modules/_core/routes/AppRoutes";
import Notification from "./modules/_core/components/ui/Notification";

const App = () => {
  return (
    <>
      <QueryClientProvider client={agendaQueryClient}>
        <AppRoutes />
      </QueryClientProvider>
      <Notification />
    </>
  );
};

export default App;
