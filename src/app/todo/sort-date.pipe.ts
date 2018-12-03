import { Pipe } from '@angular/core';
import { PipeTransform } from '@angular/core';
import {TodoService} from '../Services/todo.service';
import { Todo} from './todo.model';
@Pipe({
  name: 'sortDate',
  pure:false
})
export class SortDatePipe implements PipeTransform {


  constructor(private todoService:TodoService){}

  transform(todos:Todo[]): Todo[] {
    this.todoService.sort();
    return this.todoService.todos;
  }

}
