export class SearchPatientEntity {
  public static items = [
    { label: "Rut paciente", showName: "rut", id: "rut" },
    { label: "Nombre paciente", showName: "nombre", id: "name" },
  ];

  public static getName(id: string) {
    return this.items.find((el) => el.id === id)?.showName ?? "";
  }
}
