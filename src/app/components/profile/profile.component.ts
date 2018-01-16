import { EmployeeService } from './../../services/employee.service';
import { EmployeeModel } from './../../models/EmployeeModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id: number;
  employees: EmployeeModel[] = [];
  employee:EmployeeModel[] = []
  
    constructor(public data: EmployeeService) {
      this.id = data.getID();
  
      data.getData().subscribe(res => {
        
        for(let i = 0; i < res.length; i++){
  
          this.employees.push(
            new EmployeeModel(res[i])
          )
  
          console.log(res[1].name)
  
        }
  
  
      })

      console.log(this.employees)

      for(let z = 0; z<this.employees.length;z++){
        console.log("this"+this.id )
        console.log("this"+this.id)
        
        if(this.id == this.employees[z].ID){
          console.log("true")
          
          this.employee.push(
            new EmployeeModel(this.employees[z])
          )
        }

      }

      console.log(this.employee + "here")
  
      
     }

  ngOnInit() {
  }

}
