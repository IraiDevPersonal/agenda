import { useQuery } from "@tanstack/react-query";
import ProfessionService from "../services/profession.service";
import { QUERY_KEYS } from "@/config/query-keys";

const professionService = new ProfessionService();

export default function useProfessionsAsOptions() {
  const { refetch, data, isLoading } = useQuery({
    queryKey: [QUERY_KEYS["PROFFESIONS-FILTERS"]],
    queryFn: professionService.getProfessionsToOptions,
  });

  return {
    professionOptions: isLoading ? [] : data!,
    isLoading,
    refetch,
  };
}
