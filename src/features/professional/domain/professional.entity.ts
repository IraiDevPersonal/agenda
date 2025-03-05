import { Option } from "@/config/types";
import { toArray } from "@/features/_core/utils/to-array.util";

export type ProfessionalOption = Option<number, { professions: number[] }>;

export type ProfessionalModel = {
  id: number;
  name: string;
};

export default class ProfessionalEntity {
  public id: ProfessionalModel["id"];
  public name: ProfessionalModel["name"];

  private constructor(init: ProfessionalModel) {
    this.id = init.id;
    this.name = init.name;
  }

  static professionalsAsOptions(dataset: Record<string, any>[]) {
    return toArray(dataset).map(ProfesionalAsOption.adapter);
  }
}

class ProfesionalAsOption {
  public value: ProfessionalOption["value"];
  public label: ProfessionalOption["label"];
  public professions: ProfessionalOption["professions"];

  private constructor(init: ProfessionalOption) {
    this.label = init.label;
    this.value = init.value;
    this.professions = init.professions;
  }

  static adapter(entry: Record<string, any>) {
    const item: ProfessionalOption = {
      value: Number(entry["value"] ?? 0),
      label: entry["label"] ?? "Sin nombre...",
      professions: toArray(entry["professions"]).map((p) => p ?? 0),
    };

    return new ProfesionalAsOption(item);
  }
}
