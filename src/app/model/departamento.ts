export class Departamento {
  public descripcion_departamento: string;
  public codigo_departamento: string;

  constructor(descripcion: string, codigo: string) {
    this.descripcion_departamento = descripcion;
    this.codigo_departamento = codigo;
  }
}
