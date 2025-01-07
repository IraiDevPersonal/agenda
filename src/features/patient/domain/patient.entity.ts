import { ValidationSchema } from "@/config";

type Init = {
  id: number;
  uid: string;
  rut: string;
  names: string;
  email: string;
  phone: string;
  last_names: string;
};

const schema = new ValidationSchema();

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
    return schema.create({
      id: schema.input().number(),
      uid: schema.input().string(),
      names: schema.input().string(),
      email: schema.input().string(),
      phone: schema.input().string(),
      last_names: schema.input().string(),
      rut: schema.input().string().max(12),
    });
  }

  static fromObject(object: Record<string, any>) {
    try {
      const schema = this.getSchema().parse(object);
      return new PatientEntity(schema as Init);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
}
