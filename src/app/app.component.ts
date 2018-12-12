import { Component } from '@angular/core';
import { DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  publicaciones = [];

  constructor(private dateService: DataService) {
    this.dateService.obtenerDatos().subscribe(data => {
      this.publicaciones = data;
    });
  }
}
