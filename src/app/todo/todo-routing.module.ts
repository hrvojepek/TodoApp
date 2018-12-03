import { Routes, RouterModule } from "@angular/router";
import { TodoComponent } from "./todo.component";
import { NgModule } from "@angular/core";


const todoRoute:Routes=[
    {path:'', component:TodoComponent}
]
@NgModule({
    imports:[RouterModule.forChild(todoRoute)],
    exports:[RouterModule]
})
export class TodoRoutingModule{} 