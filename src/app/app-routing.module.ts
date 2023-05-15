import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './components/educacion/new-educacion/new-educacion.component';
import { EditFormacionAcademicaComponent } from './components/educacion/edit-formacion-academica/edit-formacion-academica.component';
import { NewSkillsComponent } from './components/hys/new-skills/new-skills.component';
import { EditSkillsComponent } from './components/hys/edit-skills/edit-skills.component';
import { EditAcercadeComponent } from './components/acerca-de/edit-acercade.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexperiencia/:id', component: EditExperienciaComponent},
  {path: 'nuevaformacionacademica', component: NewEducacionComponent},  
  {path: 'editformacionacademica/:id', component: EditFormacionAcademicaComponent},
  {path: 'nuevaskill', component: NewSkillsComponent},
  {path: 'editskill/:id', component: EditSkillsComponent},
  {path: 'editaracercade/:id', component: EditAcercadeComponent},
  {path: 'nuevoproyecto', component: NewProyectoComponent},
  {path: 'editproyecto/:id', component: EditProyectoComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
