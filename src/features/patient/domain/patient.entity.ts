import { z } from "zod";

const patientSchema = z.object({
  id: z.number(),
  uid: z.string(),
  names: z.string(),
  email: z.string(),
  phone: z.string(),
  last_names: z.string(),
  rut: z.string().max(12),
});

type Init = z.infer<typeof patientSchema>;

export class PatientEntity {
  public id: Init["id"];
  public uid: Init["uid"];
  public rut: Init["rut"];
  public names: Init["names"];
  public email: Init["email"];
  public phone: Init["phone"];
  public last_names: Init["last_names"];

  private constructor(init: Init) {
    this.id = init.id;
    this.uid = init.uid;
    this.rut = init.rut;
    this.names = init.names;
    this.email = init.email;
    this.phone = init.phone;
    this.last_names = init.last_names;
  }

  static getSchema() {
    return patientSchema;
  }

  static fromObject(object: Record<string, any>) {
    try {
      const schema = this.getSchema().parse(object);
      return new PatientEntity(schema);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
}
