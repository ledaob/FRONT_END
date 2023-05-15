import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit{
  nombreProyecto: string;
  descripcionProyecto: string;
  
  constructor(private sProyecto: ProyectoService, private router: Router){}



  ngOnInit(): void {
    
  }

  onCrear(): void{
    const proyecto = new Proyectos(this.nombreProyecto, this.descripcionProyecto);
    this.sProyecto.save(proyecto).subscribe(data=>{
      alert("Se añadió el proyecto");
      this.router.navigate(['']);
    }, err =>{
      alert("Falló");
      this.router.navigate(['']);
    })
  }
}
