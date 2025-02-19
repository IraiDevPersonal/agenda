import { v4 } from "uuid";

export default class Uid {
  public static generate() {
    return v4();
  }
}
