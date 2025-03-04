import useQuery from "@/features/_core/hooks/useQuery";
import ProfessionalService from "../services/professional.service";
import Notify from "@/config/notify";

const professionalService = new ProfessionalService();

export default function useProfessionalsAsOptions() {
  const { refetch, data, isLoading } = useQuery({
    queryKey: ["proffesionals-filters"],
    queryFn: professionalService.getProfessionalsToOptions,
    throwOnError(error) {
      Notify.error(error.message, { duration: 5000 });
      // TODO: return false para que la aplicacion no caiga despues del error
      return false;
    },
  });

  return {
    professionalOptions: isLoading ? [] : data!,
    isLoading,
    refetch,
  };
}
