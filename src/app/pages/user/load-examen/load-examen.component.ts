import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamenService } from 'src/app/services/examen.service';

@Component({
  selector: 'app-load-examen',
  templateUrl: './load-examen.component.html',
  styleUrls: ['./load-examen.component.css']
})
export class LoadExamenComponent implements OnInit {

  catId:any;
  examenes:any;
  
  constructor(
    private route:ActivatedRoute,
    private examenService:ExamenService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.catId = params['catId'];

      if(this.catId == 0) {
        console.log("Cargando todos los exámenes");
        this.examenService.obtenerExamenesActivos().subscribe(
          (data) => {
            this.examenes = data;
            console.log(this.examenes);
          },
        (error) => {
          console.log(error);
        }
        )
      } 
      else {
        console.log("Cargando un examen en específico");
        this.examenService.obtenerExamenesActivoDeUnaCategoria(this.catId).subscribe(
          (data:any) => {
            this.examenes = data;
            console.log(this.examenes);
          },
          (error) => {
            console.log(error);
          }
        )
      }
    })
  }

}
