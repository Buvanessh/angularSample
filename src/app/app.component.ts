import { Component } from '@angular/core';
import { Student } from './student';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // binding
  // title = 'sample';
  // num=10;
  // nums:number=10;

  // disableButton:Boolean=true;

  // changevalue(){
  //   this.disableButton=! this.disableButton
  // }

  // name:String="";

  // name1:String="";
  // name2:String="";
  // show(){
  //  this.name2=this.name1
  // }

  // num1:number=0;
  // num2:number=0;
  // result:number=0;
  // add()
  // {
  //   this.result=this.num1+this.num2;
  // }
  // sub()
  // {
  //   this.result=this.num1-this.num2;
  // }
  // mul()
  // {
  //   this.result=this.num1*this.num2;
  // }
  // div()
  // {
  //   this.result=this.num1/this.num2;
  // }



// directives

// names:String[]=["java","phython","javascript"]


// listofnames:String[]=[];
// names3:String='';
// save()
// {
//   this.listofnames.push(this.names3);
//   console.log(this.listofnames)
// }

// showList:boolean=false;
// change()
// {
//   this.showList=!this.showList
// }


// status:String="active";
// changestatus(status:String)
// {
//   this.status=status
// }

// attribute directive
// highlightcolour='white';
// highlight(colour: string)
// {
//   this.highlightcolour=colour;
// }

//obj creation
stu:Student=new Student();
saves()
{
  this.stu={
    name:"Buvanessh",
    age:25,
    gender:"male"
  }
}

stu1:Student={
  name:"rohit",
  age:37,
  gender:"male"
}


employees:Employee[]=[];
name:String
salary:Number
role:String
emp:Employee;
saveEmp()
{
  this.emp=new Employee(this.name,this.salary,this.role);
  this.employees.push(this.emp)
  console.log(this.employees)
}


//pipes
title='sample'
num:number=1000;
myDate:Date=new Date();
myDate2:Date=new Date('1998-09-22');


}
