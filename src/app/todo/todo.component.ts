import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Todo} from './todo.model';
import {TodoService} from '../Services/todo.service'
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos:Todo[]=[];
  modal: BsModalRef;

  currentDate=new Date();
  minDate=this.currentDate;
  @ViewChild('f') todoForm:NgForm;

  constructor(private todoService:TodoService,
               private modalService: BsModalService) { }

  ngOnInit() {
    //this.todoService.fetchTodos();
    this.todos=this.todoService.returnTodo();
  }
  onSubmit(){
    
    this.todoService.pushTodo(this.todoForm.value);
    this.todoService.saveTodos();
    console.log(this.todos);
    this.todoForm.reset();
  }


  openModal(modal: TemplateRef<any>, id:number) {
    this.modal = this.modalService.show(modal);

  }

  emmitId(id:number){
     this.todoService.index.next(id);
  }


}
