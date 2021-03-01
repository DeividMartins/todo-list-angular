import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  lista_afazeres : any = [
    'cortar cabelo',
    'bucar café',
    'comprar desodorante',
    'cortar cabelo',
  ];

  constructor(){}

  async ngOnInit(){

  }
}
