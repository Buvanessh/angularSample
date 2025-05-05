import { Component } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  name:String="";
  names:String[]=[];
  save(){
    if(this.name)
    {
    this.names.push(this.name)
    console.log(this.names)
    this.name="";
    }
  }


  employees:Employee[]=[]
  name1:String;
  age:number;
  role:String;
  emp:Employee;
  save1()
  {
    this.emp=new Employee(this.name1,this.age,this.role);
    this.employees.push(this.emp);
    console.log(this.employees)
  }
  

}
