import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { TodoService } from "../../Services/todo.service";
import { Todo } from "../todo.model";
import { NgForm, FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"]
})
export class ModalComponent implements OnInit {
  @Input() id: number;
  editForm: FormGroup;
  currentDate = new Date();
  minDate = this.currentDate;

  editTodo: Todo;
  constructor(private todoService: TodoService,) {}

  ngOnInit() {
    console.log(this.id);

    this.editTodo = this.todoService.getTodo(this.id);

    console.log(this.editTodo);

    this.editForm = new FormGroup({
      todo: new FormControl(this.editTodo.todo),
      date: new FormControl(this.editTodo.date)
    });
  }
  onDelete() {
    this.todoService.deleteTodo(this.id);
  }
  onEdit() {
    const value=this.editForm.value;
   const todo:string=value.todo;
   const date:Date=value.date;
    this.todoService.updateTodo(this.id, todo, date);
    this.todoService.putTodosDb(this.editForm.value);
    
  }
}
