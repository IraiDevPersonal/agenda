import useQuery from "@/features/_core/hooks/useQuery";
import ProfessionService from "../services/profession.service";
import Notify from "@/config/notify";

const professionService = new ProfessionService();

export default function useProfessionsAsOptions() {
  const { refetch, data, isLoading } = useQuery({
    queryKey: ["proffesions-filters"],
    queryFn: professionService.getProfessionsToOptions,
    throwOnError(error) {
      Notify.error(error.message, { duration: 5000 });
      // TODO: return false para que la aplicacion no caiga despues del error
      return false;
    },
  });

  return {
    professionOptions: isLoading ? [] : data!,
    isLoading,
    refetch,
  };
}
