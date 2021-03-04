import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  tarefa: any;
  lista_tarefa : any = [
    'cortar cabelo',
    'bucar café',
    'comprar desodorante',
    'cortar cabelo',
  ];

  constructor(){}

  async ngOnInit(){

  }

  addTarefa (tarefa){
    this.lista_tarefa.push(tarefa)
  }

  removerTarefa(tarefa){
    this.lista_tarefa.splice(this.lista_tarefa.indexOf(tarefa), 1)
  }
}
