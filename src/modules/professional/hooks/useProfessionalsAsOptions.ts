import { useQuery } from "@tanstack/react-query";
import ProfessionalService from "../services/professional.service";
import { QUERY_KEYS } from "@/config/query-keys";

const professionalService = new ProfessionalService();

export default function useProfessionalsAsOptions() {
  const { refetch, data, isLoading } = useQuery({
    queryKey: [QUERY_KEYS["PROFFESIONALS-FILTERS"]],
    queryFn: professionalService.getProfessionalsAsOptions,
    initialData: [],
  });

  return {
    professionalOptions: data!,
    isLoading,
    refetch,
  };
}
