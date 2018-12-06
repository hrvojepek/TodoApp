import { Todo } from "../todo/todo.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../Services/auth.service";
import "rxjs";
import { Subject } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { splitClasses } from "@angular/compiler";

@Injectable()
export class TodoService {
  todos: Todo[] = [];

  index = new Subject<number>();

  constructor(private http: HttpClient, private authService: AuthService) {}

  sort() {
    if(typeof this.todos!="undefined"){
      this.todos
      .sort((a: Todo, b: Todo) => {
        return a.date.valueOf() - b.date.valueOf();
      })
      .sort((a: Todo, b: Todo) => {
        return a.date == b.date ? 0 : a.date ? 1 : -1;
      });
    }
   
  }

  returnTodo() {
    return this.todos;
  }

  pushTodo(todo: Todo) {
    this.todos.push(todo);
    
  }

  fetchTodos() {
    const token = this.authService.getToken();
    this.http
      .get("https://todo-a5bcb.firebaseio.com/todos.json")
      .pipe(
        map((res: Todo[]) => {
          const todo: Todo[] = res;
          return todo;
        })
        
      )
      .subscribe((todo: Todo[]) => {
        this.todos = todo;
      });
  }

  saveTodos() {
    let a:Todo[]=this.returnTodo();
    console.log("returned todos", a);
    const token = this.authService.getToken();
    return this.http.put(
      "https://todo-a5bcb.firebaseio.com/todos.json",
      this.returnTodo()
    )
    
  }

  deleteTodo(i: number) {
    var k;
    this.todos.forEach((todo, id)=>{
      if(todo.key==i){
        k=id;
        this.todos.splice(k, 1)
      }
    })
    
  }
  updateTodo(i: number, _todo: string, _date:Date) {
    var k;
    this.todos.forEach((todo, id)=>{
      if(todo.key==i){
        k=id;
        this.todos[k].todo=_todo;
        this.todos[k].date=_date
      }
    })
    
  }
  getTodo(i: number) : Todo {
    var k;
    this.todos.forEach((todo, id)=>{
      if(todo.key==i){
        k=id;
        return this.todos[k];
      }
    })
    return this.todos[k];
    
  }
}
