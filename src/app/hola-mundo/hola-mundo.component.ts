import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.css']
})
export class HolaMundoComponent implements OnInit {

  tittle = 'Welcome To Angular';
  users = ['ryan','joe','juan'];
  users2 = ['ryan','joe','juan','antonio','jean','trujillo'];


  constructor() { }

  ngOnInit() {
  }

}
