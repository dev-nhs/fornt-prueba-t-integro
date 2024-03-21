import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Paciente } from '../model/paciente';
import { Documento } from '../model/documento';
import { Observable } from 'rxjs';
import { Sexo } from '../model/sexo';
import { Ubigeo } from '../model/ubigeo';
import { Departamento } from '../model/departamento';
import { Provincia } from '../model/provincia';
import { Distrito } from '../model/distrito';
import { Parentesco } from '../model/parentesco';
import { PacienteAcompanante } from '../model/paciente-acompanante';

@Injectable({
  providedIn: 'root',
})
export class PacienteService {
  constructor(private http: HttpClient) {}

  searchPaciente(searchForm: any): Observable<Paciente[]> {
    let params = new HttpParams();

    searchForm.value.tipo_doc != null ? (params = params.set('criterio', 1))  : (params = params.set('criterio', 2));
    params = params.set('tipo_doc', searchForm.value.tipo_doc || 0);
    params = params.set('no_doc', searchForm.value.no_doc || '');
    params = params.set('ape_pat_mat', searchForm.value.ape_pat_mat || '');
    params = params.set('nombres', searchForm.value.nombres || '');

    return this.http.get<Paciente[]>(environment.apiUrl + '/paciente', {
      params,
    });
  }

  getAllPacientes() {
    return this.http.get<Paciente[]>(environment.apiUrl + '/paciente/all');
  }

  getAllDocumentos() {
    return this.http.get<Documento[]>(environment.apiUrl + '/paciente/documento/all');
  }

  getAlllSexo() {
    return this.http.get<Sexo[]>(environment.apiUrl + '/paciente/sexo/all');
  }

  getAllUbigeo() {
    return this.http.get<Ubigeo[]>(environment.apiUrl + '/paciente/ubigeo/all');
  }

  getAllDepa() {
    return this.http.get<Departamento[]>(
      environment.apiUrl + '/paciente/departamento/all'
    );
  }

  getAllProv(depa: string) {
    let params = new HttpParams();

    params = params.set('depa', depa);

    return this.http.get<Provincia[]>(
      environment.apiUrl + '/paciente/provincia/all',
      { params }
    );
  }

  getAllDist(depa: string, prov: string) {
    let params = new HttpParams();

    params = params.set('depa', depa);
    params = params.set('prov', prov);
    return this.http.get<Distrito[]>(
      environment.apiUrl + '/paciente/distrito/all',
      { params }
    );
  }

  getAllParent() {
    return this.http.get<Parentesco[]>(
      environment.apiUrl + '/paciente/parentesco/all'
    );
  }

  savePaciente(paciente: any) {
    return this.http.post<Paciente>(
      environment.apiUrl + '/paciente/savepaciente',
      paciente
    );
  }

  savePacienteAcompanante(acompanante: any, no_docide_paciente: string) {
    let params = new HttpParams();

    params = params.set('no_docide_paciente', no_docide_paciente);
    return this.http.post<PacienteAcompanante>(
      environment.apiUrl + '/paciente/saveacompanante',
      acompanante,
      { params }
    );
  }

  deletePaciente(id_paciente : number) {
    let params = new HttpParams();

    params = params.set('id_paciente', id_paciente);
    return this.http.delete<Paciente[]>(
      environment.apiUrl + '/paciente/deletepaciente',
      { params }
    );
  }
}
