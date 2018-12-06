import { NgModule } from "@angular/core";
import { TodoComponent } from "./todo.component";
import { ModalComponent } from "./modal/modal.component";
import { SortDatePipe } from "./sort-date.pipe";
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TodoRoutingModule } from "./todo-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { TodoService } from "../Services/todo.service";
import { PaginationModule } from 'ngx-bootstrap/pagination';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
    declarations: [
        TodoComponent,
        ModalComponent,
        SortDatePipe
    ],
    imports:[
        CommonModule,
        TodoRoutingModule,
        NgxPaginationModule,
        HttpClientModule,
        BsDatepickerModule.forRoot(),
        ModalModule.forRoot(),
        FormsModule,
        PaginationModule.forRoot(),
        ReactiveFormsModule
       
    ],
    exports: [],
    providers:[TodoService]

})
export class TodoModule{}