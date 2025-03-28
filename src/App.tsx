import { QueryClientProvider } from "@tanstack/react-query";
import { CustomQueryClient } from "./config/pluggins/custom-query-client";
import AppRoutes from "@/features/_core/routes/AppRoutes";
import Notification from "./features/_core/components/ui/Notification";

const queryClient = new CustomQueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
      </QueryClientProvider>
      <Notification />
    </>
  );
};

export default App;
