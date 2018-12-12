import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Publicaciones } from "./about/publicacion";
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { 

  }

  obtenerDatos () {
    return this.http.get<Publicaciones[]>("https://jsonplaceholder.typicode.com/posts");
  }
}
