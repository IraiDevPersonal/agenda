import AppRoutes from "@/features/_core/routes/AppRoutes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Notification from "./features/_core/components/ui/Notification";

const queryClient = new QueryClient();

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
