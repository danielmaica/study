import { Component, DoCheck, OnInit } from '@angular/core';

//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {
  
  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem('list') || '[]');
  
  constructor() { }
  
  ngDoCheck(): void {
    this.setLocalStorage();
  }

  public setEmit(event: string){
    this.taskList.push({ task: event, checked: false });
  }
  
  public handleDelete(event: number) {
    this.taskList.splice(event, 1);
  }
  
  public handleDeleteAll() {
    const confirm = window.confirm('Tem certeza que deseja deletar tudo?');
    if(confirm){
      this.taskList = [];
    }
  }

  public validacaoInput(event: string, index: number){
    if(!event.length){
      const confirm = window.confirm('Task vazia, deseja excluir?');
      
      if(confirm){
        this.handleDelete(index);
      }
    }
  }

  public setLocalStorage(){
    if(this.taskList){
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem('list', JSON.stringify(this.taskList));
    }
  }
  
}
