import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit  {
  proyecto: Proyectos = null;

  constructor(private sProyectos: ProyectoService, private activatedRouter: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyectos.detail(id).subscribe(data=>{
      this.router.navigate(['']);
    }, err =>{
        alert("Error al modificar el proyecto");
        this.router.navigate(['']);
    })
  }

  onSubirProyecto(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyectos.update(id, this.proyecto).subscribe(data =>{
      this.router.navigate(['']);
    }, err =>{
      alert("Error al modificar el proyecto");
      this.router.navigate(['']);
    })
  }
}
