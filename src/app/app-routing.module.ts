import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPacienteComponent } from './component/listar-paciente/listar-paciente.component';
import { CrearPacienteComponent } from './component/crear-paciente/crear-paciente.component';

const routes: Routes = [
  { path: '', component: ListarPacienteComponent },
  { path: 'CrearPaciente', component: CrearPacienteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
