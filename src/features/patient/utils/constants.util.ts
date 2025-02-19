import { PatientEntity } from "../domain/patient.entity";
import Uid from "@/config/uid";

export const DUMMY_PATIENT: PatientEntity = {
  id: 1,
  uid: Uid.generate(),
  rut: "19.050.844-7",
  names: "Ignacio Rodrigo",
  last_names: "Arriagada Iriarte",
  email: "ignacio.arr01@gmail.com",
  phone: "+56956980565",
  address: "Porvenir sitio 2, Santa Fe",
};
