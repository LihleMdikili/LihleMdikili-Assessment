import { EmployeeService } from './../../services/employee.service';
import { EmployeeModel } from './../../models/EmployeeModel';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  employees: EmployeeModel[] = [];

constructor(public data: EmployeeService, public router: Router) {
  
      data.getData().subscribe(res => {
        
        for(let i = 0; i < res.length; i++){
  
          this.employees.push(
            new EmployeeModel(res[i])
          )
  
  
        }
  
  
      })
  
      console.log(this.employees)
      
     }

  ngOnInit() {
  }

  getID(id){
    console.log(id);
    this.data.setID(id);
    this.router.navigate(['/profile/' + id]);
  }

}
