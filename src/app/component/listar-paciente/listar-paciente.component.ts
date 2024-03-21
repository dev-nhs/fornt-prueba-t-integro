import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { PacienteService } from '../../service/paciente.service';
import { Paciente } from '../../model/paciente';
import { Documento } from '../../model/documento';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-paciente',
  templateUrl: './listar-paciente.component.html',
  styleUrl: './listar-paciente.component.scss',
})
export class ListarPacienteComponent implements OnInit, AfterViewInit {
  searchForm: FormGroup = new FormGroup({});

  Documentos: Documento[] = [];

  disabled = true;
  disabledape = true;

  toggleDisabled() {
    this.disabled = !this.disabled;
    this.validateForm();
  }

  toggleDisabled2() {
    this.disabledape = !this.disabledape;
    this.validateForm();
  }

  constructor(private fb: FormBuilder, private service: PacienteService) {}

  displayedColumns: string[] = [
    'no_apepat',
    'codigo_ieds',
    'no_docide',
    'fl_estado',
    'fe_nacimiento',
    'editar',
    'eliminar',
  ];

  dataSource = new MatTableDataSource<Paciente>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.validateForm();
    this.getAllPacientes();
    this.getAllDocumentos();
  }

  validateForm() {
    this.searchForm = this.fb.group({
      tipo_doc: [{ value: '', disabled: this.disabled }, Validators.required],
      no_doc: [{ value: '', disabled: this.disabled }, Validators.required],
      ape_pat_mat: [
        { value: '', disabled: this.disabledape },
        Validators.required,
      ],
      nombres: [{ value: '', disabled: this.disabledape }, Validators.required],
    });
  }

  submitForm() {
    if (this.searchForm.valid) {
      this.service.searchPaciente(this.searchForm).subscribe((data) => {
        this.dataSource.data = data;
        if (data.length <= 0) {
          this.alertError('Persona no registrada');
        } 
      });
    }
  }

  deletePaciente(id: number) {
    this.service.deletePaciente(id).subscribe((data) => {
      if (data != null) {
        this.dataSource.data = data;
      }
    });
  }

  clearForm() {
    this.searchForm.reset();
  }

  getAllPacientes() {
    this.service.getAllPacientes().subscribe((data) => {
      this.dataSource.data = data;
      
    });
  }

  getAllDocumentos() {
    this.service.getAllDocumentos().subscribe((data) => {
      this.Documentos = data;
      //console.log(this.Documentos);
    });
  }

  alertError(message: string) {
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
      icon: 'error',
      title: message,
    });
  }
}
