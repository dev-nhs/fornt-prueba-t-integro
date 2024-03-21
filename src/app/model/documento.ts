export class Documento {
  // Atributos publicos
  public id_tipo_documento_identidad: number;
  public descripcion_tipo_documento_identidad: string;
  public codigo_ieds: string;
  public fl_estado: boolean;

  // Constructor
  constructor(
    id_tipo_documento_identidad: number,
    descripcion_tipo_documento_identidad: string,
    codigo_ieds: string,
    fl_estado: boolean
  ) {
    this.id_tipo_documento_identidad = id_tipo_documento_identidad;
    this.descripcion_tipo_documento_identidad =
      descripcion_tipo_documento_identidad;
    this.codigo_ieds = codigo_ieds;
    this.fl_estado = fl_estado;
  }
}
