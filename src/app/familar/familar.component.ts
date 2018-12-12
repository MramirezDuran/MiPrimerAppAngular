import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-familar',
  templateUrl: './familar.component.html',
  styleUrls: ['./familar.component.css']
})
export class FamilarComponent implements OnInit {
  @Input() nombreFamiliar;
  
  constructor() { }

  ngOnInit() {
  }

}
