import { z } from "zod";

type Init = {
  id: number;
  uid: string;
  rut: string;
  names: string;
  email: string;
  phone: string;
  last_names: string;
};

export class PatientEntity {
  public id: number;
  public uid: string;
  public rut: string;
  public names: string;
  public email: string;
  public phone: string;
  public last_names: string;

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
    return z.object({
      id: z.number(),
      uid: z.string(),
      names: z.string(),
      email: z.string(),
      phone: z.string(),
      last_names: z.string(),
      rut: z.string().max(12),
    });
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
