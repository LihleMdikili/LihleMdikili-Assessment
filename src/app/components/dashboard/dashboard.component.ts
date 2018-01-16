import { Router } from '@angular/router';
import { EmployeeModel } from './../../models/EmployeeModel';
import { EmployeeService } from './../../services/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  view: string;

  employees: EmployeeModel[] = [];

  constructor(public data: EmployeeService, public router: Router) {
    this.view ='grid';

    data.getData().subscribe(res => {
      
      for(let i = 0; i < res.length; i++){

        this.employees.push(
          new EmployeeModel(res[i])
        )

        console.log(res[1].name)

      }


    })

    
   }

   setView(view){
    this.view = view;
   }

   getID(id){
    console.log(id);
    this.data.setID(id);
    this.router.navigate(['/profile/' + id]);
  }

  ngOnInit() {
  }

}
