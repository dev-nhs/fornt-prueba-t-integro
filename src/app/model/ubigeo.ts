export class Ubigeo {
  public descripcion_departamento: string;
  public descripcion_provincia: string;
  public descripcion_distrito: string;
  public fl_estado: boolean;
  public codigo_ubigeo: number;
  public codigo_departamento: string;
  public codigo_provincia: string;
  public codigo_distrito: string;

  constructor(
    descripcion_departamento: string,
    descripcion_provincia: string,
    descripcion_distrito: string,
    fl_estado: boolean,
    codigo_ubigeo: number,
    codigo_departamento: string,
    codigo_provincia: string,
    codigo_distrito: string
  ) {
    this.descripcion_departamento = descripcion_departamento;
    this.descripcion_provincia = descripcion_provincia;
    this.descripcion_distrito = descripcion_distrito;
    this.fl_estado = fl_estado;
    this.codigo_ubigeo = codigo_ubigeo;
    this.codigo_departamento = codigo_departamento;
    this.codigo_provincia = codigo_provincia;
    this.codigo_distrito = codigo_distrito;
  }
}
