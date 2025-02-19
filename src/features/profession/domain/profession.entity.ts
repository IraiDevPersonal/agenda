import { Option } from "@/config/types";
import { toArray } from "@/features/_core/utils/to-array.util";

export type ProfessionModel = {
  id: number;
  name: string;
};

export default class ProfessionEntity {
  public id: ProfessionModel["id"];
  public name: ProfessionModel["name"];

  private constructor(init: ProfessionModel) {
    this.id = init.id;
    this.name = init.name;
  }

  static professionsAsOptions(dataset: Record<string, any>[]) {
    return toArray(dataset).map(ProfesionAsOption.adapter);
  }
}

class ProfesionAsOption {
  public value: Option["value"];
  public label: Option["label"];

  private constructor(init: Option) {
    this.label = init.label;
    this.value = init.value;
  }

  static adapter(entry: Record<string, any>) {
    const item = {
      value: `${entry["id"] ?? 0}`,
      label: entry["name"] ?? "Sin nombre...",
    };

    return new ProfesionAsOption(item);
  }
}
