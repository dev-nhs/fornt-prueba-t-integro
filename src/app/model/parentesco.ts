export class Parentesco {
  id_parentesco: number;
  no_parentesco: string;
  il_activo: boolean;

  constructor(
    id_parentesco: number,
    no_parentesco: string,
    il_activo: boolean
  ) {
    this.id_parentesco = id_parentesco;
    this.no_parentesco = no_parentesco;
    this.il_activo = il_activo;
  }
}
