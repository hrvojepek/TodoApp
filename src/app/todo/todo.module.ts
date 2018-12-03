import { NgModule } from "@angular/core";
import { TodoComponent } from "./todo.component";
import { ModalComponent } from "./modal/modal.component";
import { SortDatePipe } from "./sort-date.pipe";
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TodoRoutingModule } from "./todo-routing.module";


@NgModule({
    declarations: [
        TodoComponent,
        ModalComponent,
        SortDatePipe
    ],
    imports:[
        CommonModule,
        TodoRoutingModule,
        BsDatepickerModule.forRoot(),
        ModalModule.forRoot(),
        FormsModule,
       
    ],
    exports: []

})
export class TodoModule{}