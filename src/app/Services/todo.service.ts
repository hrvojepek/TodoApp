import {Todo} from '../todo/todo.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../Services/auth.service';
import 'rxjs';
import { Subject } from "rxjs";
import {map} from 'rxjs/operators';

@Injectable()
export class TodoService{
  todos:Todo[]=[];
  index=new Subject<number>();


  constructor(private http:HttpClient, private authService:AuthService){}



sort(){
    this.todos
    .sort((a:Todo, b:Todo)=>{
      return a.date.valueOf()-b.date.valueOf();
    })
    .sort((a:Todo, b:Todo)=>{
      return (a.date==b.date ? 0 : (a.date? 1  :-1));
    }
    )  
  }




  returnTodo(){
    return this.todos;
  }


  pushTodo(todo:Todo){
  this.todos.push(todo);
  }


  fetchTodos(){  
    
    this.http.get('https://todo-a5bcb.firebaseio.com/todo.json')
    .pipe(map(
        (res:Todo[])=>{
            const todo:Todo[]=res;
           return todo;
        }
    )).subscribe(
        (todo:Todo[])=>{
            this.todos=todo;
        }
    );
}

  saveTodos(){
    return this.http.put('https://todo-a5bcb.firebaseio.com/todo.json', this.returnTodo())
  }

  deleteTodo(i:number){
    this.todos.splice(i, 1);
  }
  updateTodo(i:number, todo:Todo){
    this.todos[i]=todo;
    console.log(todo+"------");
  }
  getTodo(i:number) : Todo{
    console.log(i+"....")
    return this.todos[i];
  }
  
  
  



}