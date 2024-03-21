export class Sexo {
  public id_sexo: number;
  public descripcion_sexo: string;
  public fl_estado: boolean;

  constructor(id_sexo: number, descripcion_sexo: string, fl_estado: boolean) {
    this.id_sexo = id_sexo;
    this.descripcion_sexo = descripcion_sexo;
    this.fl_estado = fl_estado;
  }
}
