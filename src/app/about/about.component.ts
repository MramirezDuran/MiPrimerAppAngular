import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { Publicaciones } from './publicacion';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  publicaciones: Publicaciones[];

  constructor(private dateService:DataService) { 
    this.dateService.obtenerDatos().subscribe(datos => {
      //console.log(datos);
      this.publicaciones = datos;
    });
  }

  ngOnInit() {
  }

}
