export class PacienteAcompanante {
  public id_paciente: string;
  public id_tipo_docide: number;
  public no_docide: string;
  public no_apepat: string;
  public no_apemat: string;
  public no_nombres: string;
  public fe_nacimiento: Date;
  public id_parentesco: number;
  public nu_telefo_contacto: string;
  public no_direccion: string;
  public co_ubigeo: number;

  constructor(
    id_paciente: string,
    id_tipo_docide: number,
    no_docide: string,
    no_apepat: string,
    no_apemat: string,
    no_nombres: string,
    fe_nacimiento: Date,
    id_parentesco: number,
    nu_telefo_contacto: string,
    no_direccion: string,
    co_ubigeo: number
  ) {
    this.id_paciente = id_paciente;
    this.id_tipo_docide = id_tipo_docide;
    this.no_docide = no_docide;
    this.no_apepat = no_apepat;
    this.no_apemat = no_apemat;
    this.no_nombres = no_nombres;
    this.fe_nacimiento = fe_nacimiento;
    this.id_parentesco = id_parentesco;
    this.nu_telefo_contacto = nu_telefo_contacto;
    this.no_direccion = no_direccion;
    this.co_ubigeo = co_ubigeo;
  }
}
