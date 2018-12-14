export class Forecast{
    date:Date;
    icon:string;
    maxTemp:number;
    minTemp:number;
    weather:string
    constructor(_date:Date, _icon:string, _max:number, _min:number, _weather:string){
        this.date=_date;
        this.icon=_icon;
        this.maxTemp=_max;
        this.minTemp=_min;
        this.weather=_weather;
    }
}