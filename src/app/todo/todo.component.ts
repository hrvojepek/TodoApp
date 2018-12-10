import {
  Component,
  OnInit,
  ViewChild,
  TemplateRef,
  OnDestroy
} from "@angular/core";
import { NgForm } from "@angular/forms";
import { Todo } from "./todo.model";
import { TodoService } from "../Services/todo.service";
import { BsModalService } from "ngx-bootstrap/modal";
import { BsModalRef } from "ngx-bootstrap/modal/bs-modal-ref.service";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit, OnDestroy {
  todos: Todo[] = [];
  paginateTodos: Todo[];
  p = 1;
  modal: BsModalRef;
  key: number;
  currentDate = new Date();
  minDate = this.currentDate;
  @ViewChild("f") todoForm: NgForm;

  constructor(
    private todoService: TodoService,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    this.todos = this.todoService.returnTodo();
    this.todoService.fetchTodos();
    this.todoService.closeModal.subscribe(
      ()=>{
        this.modal.hide();
      }
    );
  }
  onSubmit() {
    const value = this.todoForm.value;
    const tmpTodo: Todo = new Todo(
      value.todo,
      value.date,
      Math.floor(Math.random() * 100)
    );
    this.todoService.pushTodo(tmpTodo);
    this.todoService.putTodosDb(tmpTodo);
    console.log(this.todos);
    this.todoForm.reset();
  }

  openModal(modal: TemplateRef<any>, id: number) {
    this.key = id;
    console.log(id);
    this.modal = this.modalService.show(modal);
  }
  closeModal(modal: TemplateRef<any>) {
    this.modal.hide();
  }

  ngOnDestroy() {
    this.todos.length = 0;
  }
}
