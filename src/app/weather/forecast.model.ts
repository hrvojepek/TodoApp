export class Forecast{
    date:Date;
    icon:string;
    maxTemp:number;
    minTemp:number;
    constructor(_date:Date, _icon:string, _max:number, _min){
        this.date=_date;
        this.icon=_icon;
        this.maxTemp=_max;
        this.minTemp=_min;
    }
}