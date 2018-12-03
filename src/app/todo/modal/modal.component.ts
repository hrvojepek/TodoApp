import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {TodoService} from '../../Services/todo.service';
import {Todo} from '../todo.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

 
   @ViewChild("e") editForm:NgForm;
  currentDate=new Date();
  minDate=this.currentDate;
  id:number;
  editTodo:Todo;
  constructor(private todoService:TodoService) { }

  ngOnInit() {
    console.log("eeeeee");
    this.todoService.index.subscribe(
      (id:number)=>{
        this.editTodo=this.todoService.getTodo(id);
        this.id=id;
        console.log(this.id+"jel taj");

        console.log(this.editTodo);
        this.editForm.value.todo=this.editTodo.todo;
        this.editForm.value.date=this.editTodo.date;

      }
    );
      
      
  }
  onDelete(){
    this.todoService.deleteTodo(this.id);
  }
  onEdit(){
    this.todoService.updateTodo(this.id, this.editForm.value);
  }



}
