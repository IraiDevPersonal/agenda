import { QueryClientProvider } from "@tanstack/react-query";
import agendaQueryClient from "./config/pluggins/agenda-query-client";
import AppRoutes from "@/features/_core/routes/AppRoutes";
import Notification from "./features/_core/components/ui/Notification";

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
