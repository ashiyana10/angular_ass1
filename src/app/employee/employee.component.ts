import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from './employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  Employee:Employee={
    fname:'',
    lname:'',
    email:'',
    contact:'',
    address:'',
    user_name:'',
    pwd:'',
    gender:'',
    qualification:[''],
    experience:[''],
    language:['']

  };
  constructor() { }

  ngOnInit(): void {
  }
  onsubmit(form:NgForm)
  {
      console.log( this.Employee );
  }

}
