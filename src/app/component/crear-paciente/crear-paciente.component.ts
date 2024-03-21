import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Documento } from '../../model/documento';
import { PacienteService } from '../../service/paciente.service';
import { Sexo } from '../../model/sexo';
import { Ubigeo } from '../../model/ubigeo';
import { Departamento } from '../../model/departamento';
import { Provincia } from '../../model/provincia';
import { Distrito } from '../../model/distrito';
import { Parentesco } from '../../model/parentesco';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-paciente',
  templateUrl: './crear-paciente.component.html',
  styleUrl: './crear-paciente.component.scss',
})
export class CrearPacienteComponent implements OnInit {
  registroFormPaciente: FormGroup = new FormGroup({});
  registroFormPacienteAcompanate: FormGroup = new FormGroup({});

  disabled = true;

  toggleDisabled() {
    this.disabled = !this.disabled;
    this.formValidationsAcompanante();
  }

  Documentos: Documento[] = [];
  Sexo: Sexo[] = [];
  Ubigeo: Ubigeo[] = [];
  Depa: Departamento[] = [];
  Prov: Provincia[] = [];
  Dist: Distrito[] = [];
  Parent: Parentesco[] = [];

  Depa2: Departamento[] = [];
  Prov2: Provincia[] = [];
  Dist2: Distrito[] = [];

  constructor(private fb: FormBuilder, private service: PacienteService, private router: Router) {}

  ngOnInit(): void {
    this.fromValidationsPaciente();
    this.formValidationsAcompanante();

    this.service.getAllDocumentos().subscribe((data) => {
      this.Documentos = data;
    });

    this.service.getAlllSexo().subscribe((data) => {
      this.Sexo = data;
    });

    this.service.getAllDepa().subscribe((data) => {
      this.Depa = data;
      this.Depa2 = data;
    });

    this.service.getAllParent().subscribe((data) => {
      this.Parent = data;
    });
  }

  submitForms() {
    if (this.registroFormPaciente.valid) {
      let _id_tipo_documento_identidad = this.registroFormPaciente.value.id_tipo_docide;
      let _no_docide = this.registroFormPaciente.value.no_docide;
      let _no_apepat = this.registroFormPaciente.value.no_apepat;
      let _no_apemat = this.registroFormPaciente.value.no_apemat;
      let _no_nombres = this.registroFormPaciente.value.no_nombres;
      let _id_sexo = this.registroFormPaciente.value.id_sexo;
      let _fe_nacimiento = this.registroFormPaciente.value.fe_nacimiento;
      let _no_lugar_nacimiento =  this.registroFormPaciente.value.no_lugar_nacimiento;
      let _no_direccion = this.registroFormPaciente.value.no_direccion;
      let _codigo_ubigeo = this.registroFormPaciente.value.depa + this.registroFormPaciente.value.prov + this.registroFormPaciente.value.dist;

      const pacienteData = {
        documento: {
          id_tipo_documento_identidad: _id_tipo_documento_identidad,
        },
        no_docide: _no_docide,
        no_apepat: _no_apepat,
        no_apemat: _no_apemat,
        no_nombres: _no_nombres,
        sexo: { id_sexo: _id_sexo },
        fe_nacimiento: _fe_nacimiento,
        no_lugar_nacimiento: _no_lugar_nacimiento,
        no_direccion: _no_direccion,
        ubigeo: { codigo_ubigeo: _codigo_ubigeo },
      };

      this.service.savePaciente(pacienteData).subscribe((data) => {
        console.log('Paciente registrado!');
        this.RegistrarPacienteAccompanante();
        this.alertSuccess('Se registró correctamente');
        this.clearForms();
      });

    }
  }

  RegistrarPacienteAccompanante() {
    if (this.registroFormPacienteAcompanate.valid) {
      let _id_tipo_documento_identidad_ = this.registroFormPacienteAcompanate.value.id_tipo_docide;
      let _no_docide_ = this.registroFormPacienteAcompanate.value.no_docide;
      let _no_apepat_ = this.registroFormPacienteAcompanate.value.no_apepat;
      let _no_apemat_ = this.registroFormPacienteAcompanate.value.no_apemat;
      let _no_nombres_ = this.registroFormPacienteAcompanate.value.no_nombres;
      let _fe_nacimiento_ = this.registroFormPacienteAcompanate.value.fe_nacimiento;
      let _id_parentesco_ = this.registroFormPacienteAcompanate.value.id_parentesco;
      let _nu_telefo_contacto_ = this.registroFormPacienteAcompanate.value.nu_telefo_contacto;
      let _no_direccion_ = this.registroFormPacienteAcompanate.value.no_direccion;
      let _codigo_ubigeo_ = this.registroFormPacienteAcompanate.value.depa + this.registroFormPacienteAcompanate.value.prov + this.registroFormPacienteAcompanate.value.dist;

      const acompananteData = {
        documento: {
          id_tipo_documento_identidad: _id_tipo_documento_identidad_,
        },
        no_docide: _no_docide_,
        no_apepat: _no_apepat_,
        no_apemat: _no_apemat_,
        no_nombres: _no_nombres_,
        fe_nacimiento: _fe_nacimiento_,
        parentesco: {
          id_parentesco: _id_parentesco_,
        },
        nu_telefo_contacto: _nu_telefo_contacto_,
        no_direccion: _no_direccion_,
        ubigeo: {
          codigo_ubigeo: _codigo_ubigeo_,
        },
      };

      
      let _no_docide = this.registroFormPaciente.value.no_docide;

      this.service
        .savePacienteAcompanante(acompananteData, _no_docide)
        .subscribe((data) => {
          console.log('Acompañante registrado!');
          this.alertSuccess('Se registró correctamente');
          this.clearForms();
        });
    } 


  }

  depa: string = '';
  filtrarProvincias(event: any, id_cbx: string) {
    this.depa = event.value;
    this.service.getAllProv(event.value).subscribe((data) => {
      //id_cbx == 'cbx_depa' ? (this.Prov = data) : (this.Prov2 = data);
      if (id_cbx == 'cbx_depa') {
        this.Prov = data;
      } else {
        this.Prov2 = data;
      }
    });
  }

  filtrarDistritos(event: any, id_cbx: string) {
    this.service.getAllDist(this.depa, event.value).subscribe((data) => {
      //id_cbx == 'cbx_prov' ? (this.Dist2 = data) : (this.Dist = data);
      if (id_cbx == 'cbx_prov') {
        this.Dist = data;
      } else {
        this.Dist2 = data;
      }
    });
  }

  fromValidationsPaciente() {
    this.registroFormPaciente = this.fb.group({
      id_tipo_docide: ['', Validators.required],
      no_docide: ['', Validators.required],
      no_apepat: ['', Validators.required],
      no_apemat: ['', Validators.required],
      no_nombres: ['', Validators.required],
      id_sexo: ['', Validators.required],
      fe_nacimiento: ['', Validators.required],
      edad: [''],
      no_lugar_nacimiento: ['', Validators.required],
      no_direccion: ['', Validators.required],
      depa: ['', Validators.required],
      prov: ['', Validators.required],
      dist: ['', Validators.required],
    });
  }

  formValidationsAcompanante() {
    this.registroFormPacienteAcompanate = this.fb.group({
      id_tipo_docide: [
        { value: '', disabled: this.disabled },
        Validators.required,
      ],
      no_docide: [{ value: '', disabled: this.disabled }, Validators.required],
      no_apepat: [{ value: '', disabled: this.disabled }, Validators.required],
      no_apemat: [{ value: '', disabled: this.disabled }, Validators.required],
      no_nombres: [{ value: '', disabled: this.disabled }, Validators.required],
      fe_nacimiento: [
        { value: '', disabled: this.disabled },
        Validators.required,
      ],
      edad: [{ value: '', disabled: this.disabled }],
      id_parentesco: [
        { value: '', disabled: this.disabled },
        Validators.required,
      ],
      nu_telefo_contacto: [
        { value: '', disabled: this.disabled },
        Validators.required,
      ],
      no_direccion: [
        { value: '', disabled: this.disabled },
        Validators.required,
      ],
      depa: [{ value: '', disabled: this.disabled }, Validators.required],
      prov: [{ value: '', disabled: this.disabled }, Validators.required],
      dist: [{ value: '', disabled: this.disabled }, Validators.required],
    });
  }

  yearsDifferencePaciente: any;
  yearsDifferencePacienteAcompnante: any;

  calculateYearsDifference(selectedDate: Date): number {
    const today = new Date();
    const diffInMilliseconds = today.getTime() - selectedDate.getTime();
    const diffInYears = diffInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    return Math.abs(Math.floor(diffInYears));
  }

  alertSuccess(message: string) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: 'success',
      title: message,
    });
  }
  
  routerLink() {
    this.router.navigate(['./']);
  }

  clearForms() {
    this.registroFormPaciente.reset();
    this.registroFormPacienteAcompanate.reset();
  }
}
