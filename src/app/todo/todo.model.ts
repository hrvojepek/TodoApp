
export class Todo{
    todo:string;
    date:Date;
    key:number;
    constructor(todo:string, date:Date, key:number){
        this.todo=todo;
        this.date=date;
        this.key=key;
    }
}