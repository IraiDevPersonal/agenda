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

type PatientModel = z.infer<typeof patientSchema>;

export class PatientEntity {
  public id: PatientModel["id"];
  public uid: PatientModel["uid"];
  public rut: PatientModel["rut"];
  public names: PatientModel["names"];
  public email: PatientModel["email"];
  public phone: PatientModel["phone"];
  public address: PatientModel["address"];
  public last_names: PatientModel["last_names"];

  private constructor(init: PatientModel) {
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

  static fromObject(entry: Record<string, any>) {
    try {
      const patient = patientSchema.parse(entry);
      return new PatientEntity(patient);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
}
