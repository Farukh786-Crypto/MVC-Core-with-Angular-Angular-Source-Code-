import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Patient } from './Patient.Model';
import { Problem } from './Problem.Model';
import { Config } from '../common/common.config';
@Component({
  selector: 'app-root',
  templateUrl: './Patient.PatientView.html',
  styleUrls: ['./Patient.component.css']
})
export class PatientComponent {
  title = 'PatientManagement';

  patientObj:Patient=new Patient();
  problemObj:Problem=new Problem(); 

  constructor(public httpClient:HttpClient,
    public config:Config){

  }

  AddProblem()
  {
    this.patientObj.problems.push(this.problemObj);
    this.problemObj=new Problem();
  }

  Add():void{
      alert(this.patientObj.id);
      // https://localhost:44307/Patient/SubmitPatient
      var obervable=this.httpClient.post(this.config.apiUrl+"api/PatientApi"
      ,this.patientObj); 
      obervable.subscribe(res=>this.Sucess(res),
                          res=>this.Error(res));
      alert("Hii"); 
  }
  Sucess(res:any)
  {

  }
  Error(res:any)
  {

  }

}
