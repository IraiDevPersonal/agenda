import { z } from "zod";

export class ValidationSchema {
  public create(shape: z.ZodRawShape, params?: z.RawCreateParams) {
    return z.object(shape, params);
  }

  public input() {
    return z;
  }
}
