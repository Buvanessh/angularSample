import { Component } from '@angular/core';

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
}
