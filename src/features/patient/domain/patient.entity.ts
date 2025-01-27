import { checkRut } from "react-rut-formatter";
import { z } from "zod";

const patientSchema = z.object({
  id: z.number(),
  uid: z.string(),
  names: z.string().min(1, { message: "Obligatorio" }),
  phone: z.string().min(1, { message: "Obligatorio" }),
  last_names: z.string().min(1, { message: "Obligatorio" }),
  rut: z
    .string()
    .max(12)
    .min(1, { message: "Obligatorio" })
    .refine(checkRut, { message: "Rut invalido" }),
  address: z.string().min(10, { message: "Minimo 10 caracteres" }),
  email: z
    .string()
    .min(1, { message: "Obligatorio" })
    .email({ message: "Formato incorrecto" }),
});

type Init = z.infer<typeof patientSchema>;

export class PatientEntity {
  public id: Init["id"];
  public uid: Init["uid"];
  public rut: Init["rut"];
  public names: Init["names"];
  public email: Init["email"];
  public phone: Init["phone"];
  public address: Init["address"];
  public last_names: Init["last_names"];

  private constructor(init: Init) {
    this.id = init.id;
    this.uid = init.uid;
    this.rut = init.rut;
    this.names = init.names;
    this.email = init.email;
    this.phone = init.phone;
    this.address = init.address;
    this.last_names = init.last_names;
  }

  static getValidationSchema() {
    return patientSchema;
  }

  static fromObject(object: Record<string, any>) {
    try {
      const schema = this.getValidationSchema().parse(object);
      return new PatientEntity(schema);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
}
