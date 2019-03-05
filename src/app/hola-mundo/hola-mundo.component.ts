import { Component, OnInit } from '@angular/core';
import { ExcelService } from '../excelcomponente/excel.service';


@Component({
  selector: 'app-hola-mundo',
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.css']
})
export class HolaMundoComponent implements OnInit {

  tittle = 'Welcome To Angular';
  users = ['ryan','joe','juan'];
  users2 = ['ryan','joe','juan','antonio','jean','trujillo'];
  
  activated: boolean = true;

  changeState(){
    this.activated = !this.activated;
  }

  constructor(private excelService: ExcelService) { }

  generateExcel(){
    this.excelService.generateExcel();
  }

  ngOnInit() {
  }

}
