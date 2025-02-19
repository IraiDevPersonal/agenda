import { useEffect, useState } from "react";
import ProfessionService from "../services/profession.service";
import type { Option } from "@/config/types";

type Props = {
  shouldLoad?: boolean;
};

export default function useProfessionAsOptions(props?: Props) {
  const [professionOptions, setProfessionOptions] = useState<Option[]>([]);

  const getProfessions = async () => {
    const professionService = new ProfessionService();
    const [error, professions] = await professionService.getProfessionsAsOptions();

    if (error) {
      alert(error);
      return;
    }
    setProfessionOptions(professions! as unknown as Option[]);
  };

  useEffect(() => {
    if (!props?.shouldLoad) return;
    getProfessions();
  }, [props?.shouldLoad]);

  return {
    professionOptions,
    getProfessions,
  };
}
