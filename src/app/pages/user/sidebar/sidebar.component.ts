import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  categorias:any;

  constructor(
    private categoriaService:CategoriaService,
    private snack:MatSnackBar
    ) { }

  ngOnInit(): void {
    this.categoriaService.listarCategorias().subscribe(
      (data:any) => {
        this.categorias = data;
      },
      (error) => {
        this.snack.open('Error al Cargar las categorías','',{
          duration: 3000
        })
        console.log(error);
      }
    )
  }

}
