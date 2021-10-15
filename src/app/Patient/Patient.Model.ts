import { Problem } from "./Problem.Model";

export class Patient{
    id:number=0;
    name:string="";
    problems:Array<Problem>=new Array<Problem>();
}