export class ResponseData {

    _id:string;
    ID:String;
    active:String; 
    grades: Array<number>; 
    Name:String; 
    Gender:String; 
    Class:String; 
    Club:String; 
    Persona:String; 
    Crush:String; 
    BreastSize:String; 
    Strength:String; 
    Hairstyle:String; 
    Color:String; 
    Stockings:String; 
    Accessory:String; 
    ScheduleTime:String; 
    ScheduleDestination:String; 
    ScheduleAction:String;
    __v:number

 
    constructor( data:
       {
        _id?:string;
        ID?:String;
        active?:String; 
        grades?: Array<number>; 
        Name?:String; 
        Gender?:String; 
        Class?:String; 
        Club?:String; 
        Persona?:String; 
        Crush?:String; 
        BreastSize?:String; 
        Strength?:String; 
        Hairstyle?:String; 
        Color?:String; 
        Stockings?:String; 
        Accessory?:String; 
        ScheduleTime?:String; 
        ScheduleDestination?:String; 
        ScheduleAction?:String;
        __v?:number
       }
    ){

        this._id = data._id;
        this.ID = data.ID;
        this.active = data.active;
        this.grades = data.grades; 
        this.Name = data.Name; 
        this.Gender = data.Gender; 
        this.Class = data.Class; 
        this.Club = data.Club; 
        this.Persona = data.Persona; 
        this.Crush = data.Crush; 
        this.BreastSize = data.BreastSize; 
        this.Strength = data.Strength; 
        this.Hairstyle = data.Hairstyle; 
        this.Color = data.Color; 
        this.Stockings = data.Stockings; 
        this.Accessory = data.Accessory ; 
        this.ScheduleTime = data.ScheduleTime; 
        this.ScheduleDestination = data.ScheduleDestination; 
        this.ScheduleAction = data.ScheduleAction;
        this.__v = data.__v

    }
 
 }