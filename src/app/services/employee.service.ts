import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {
id: number;
  constructor(public http: Http) { }

  getData(){
    return this.http.get('../../assets/Employees.json')
      .map(res => res.json())
  }

  getID(){
    return this.id;
  }

  setID(id){
    this.id = id;
  }

}
