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
  closeModal= new Subject<any>();
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
  onModalClose(modal){
    this.closeModal.next(modal);
  }

  returnTodo() {
    return this.todos;
  }

  pushTodo(todo: Todo) {
    this.todos.push(todo);
    
  }

  fetchTodos() {
    var currentDate=new Date();
    const token = this.authService.getToken();
    this.http
      .get("https://todo-a5bcb.firebaseio.com/data.json?auth="+token)
      .subscribe((todos: Todo[]) => {
        for(let todo of todos){
          todo.date=new Date(todo.date);
          if(todo.date.getDate()>=currentDate.getDate()){
            this.todos.push(todo);
          console.log("return",todo)
          }
          
        }
         
      });
  }

  
  putTodosDb(todo:Todo){
    const token = this.authService.getToken();
    this.http.put("https://todo-a5bcb.firebaseio.com/data.json?auth="+token, this.returnTodo())
    .subscribe(
      (data)=>{
        console.log("putt", data)
      }
    )
  }
  
  deleteTodo(_key: number) {
    var k;
    this.todos.forEach((todo, id)=>{
      if(todo.key==_key){
        k=id;
        this.todos.splice(k, 1)
      }
    })
    
  }
  updateTodo(key: number, _todo:Todo) {
    var k;
    this.todos.forEach((todo, id)=>{
      if(todo.key==key){
        k=id;
        this.todos[k]=_todo
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
