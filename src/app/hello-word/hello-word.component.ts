import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hello-word',
  templateUrl: './hello-word.component.html',
  styleUrls: ['./hello-word.component.css']
})
export class HelloWordComponent implements OnInit {
  nombreFamiliar: string = "Marcelo";
  edadFamiliar: number = 50;

  miFamilia: string[] = ['Jazna','Catalina','Isidora','Francisco'];

  miNombre: string = "Marcelo";
  edad: number;
  direccion: {
    calle: string;
    ciudad: string;
  };
  hobbies: string[];
  publicaciones = [];

  constructor() {
    this.edad = 50;
    this.direccion = {
      calle: "MI CASA",
      ciudad: "CONCEPCION"
    }
    this.hobbies = ["dormir","cine","comer comida"];
  }

  enviarMenaje(mensaje: string){
    alert(mensaje);
  }

  eliminarFamiliar(familiar){
    for (let i = 0; i< this.miFamilia.length; i++){
      if (familiar == this.miFamilia[i]){
        this.miFamilia.splice(i, 1);
      }
    }
  }

  enviarFamiliar(nuevoFamiliar){
    this.miFamilia.push(nuevoFamiliar.value);
    nuevoFamiliar.value = "";
    nuevoFamiliar.focus();
    
    return false;
  }

  ngOnInit() {
  }

}
