import { v4 } from "uuid";

export class Uid {
  public static generate() {
    return v4();
  }
}
