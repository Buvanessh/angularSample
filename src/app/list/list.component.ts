import { Component, Input } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  names:String[]=[];

  @Input()
  employees:Employee[]=[]
}
