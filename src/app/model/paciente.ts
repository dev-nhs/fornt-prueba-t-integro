export class Paciente {
  // Atributos publicos
  public id_paciente: number;
  public no_apepat: string;
  public no_apemat: string;
  public no_nombres: string;
  public codigo_ieds: string;
  public no_docide: string;
  public fl_estado: boolean;
  public fe_nacimiento: Date;

  public documento: [];
  public sexo: [];
  public no_lugar_nacimiento: string;
  public no_direccion: string;
  public ubigeo: [];
  // Constructor
  constructor(
    id_paciente: number,
    no_apepat: string,
    no_apemat: string,
    no_nombres: string,
    codigo_ieds: string,
    no_docide: string,
    fl_estado: boolean,
    fe_nacimiento: Date,
    documento: [],
    sexo: [],
    no_lugar_nacimiento: string,
    no_direccion: string,
    ubigeo: []
  ) {
    this.id_paciente = id_paciente;
    this.no_apepat = no_apepat;
    this.no_apemat = no_apemat;
    this.no_nombres = no_nombres;
    this.codigo_ieds = codigo_ieds;
    this.no_docide = no_docide;
    this.fl_estado = fl_estado;
    this.fe_nacimiento = fe_nacimiento;
    this.documento = documento;
    this.sexo = sexo;
    this.no_lugar_nacimiento = no_lugar_nacimiento;
    this.no_direccion = no_direccion;
    this.ubigeo = ubigeo;
  }
}
