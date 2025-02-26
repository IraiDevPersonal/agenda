import { Option } from "@/config/types";
import { toArray } from "@/features/_core/utils/to-array.util";

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
  public value: Option["value"];
  public label: Option["label"];

  private constructor(init: Option) {
    this.label = init.label;
    this.value = init.value;
  }

  static adapter(entry: Record<string, any>) {
    const item = {
      value: `${entry["value"] ?? 0}`,
      label: entry["label"] ?? "Sin nombre...",
    };

    return new ProfesionalAsOption(item);
  }
}
