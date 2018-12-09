import { Component, OnInit, Input, ViewChild, TemplateRef } from "@angular/core";
import { TodoService } from "../../Services/todo.service";
import { Todo } from "../todo.model";
import { NgForm, FormGroup, FormControl } from "@angular/forms";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";

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
  @ViewChild('modalRef') modalRef: BsModalRef;
  editTodo: Todo;
  constructor(private todoService: TodoService,private modalService:BsModalService) {}

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
    const value=this.editForm.value;
    this.editTodo.todo=value.todo;
    this.editTodo.date=value.date;
    this.todoService.putTodosDb(this.editTodo);

  }
  onEdit() {
    const value=this.editForm.value;
    this.editTodo.todo=value.todo;
    this.editTodo.date=value.date;
    this.todoService.updateTodo(this.id, this.editTodo);
    this.todoService.putTodosDb(this.editTodo);
    
  }
  
}
