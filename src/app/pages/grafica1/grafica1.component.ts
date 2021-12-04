import { Component, OnInit } from '@angular/core';
import { MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {

 public datos2: string[] = ['q', '2', 'x'];
 public data2  = [ [12, 32, 21],];
  constructor() { }

  ngOnInit(): void {
  }

}
