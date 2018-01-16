export class EmployeeModel{
    ID: number;
    FirstName: string;
    LastName: string;
    Email: string;
    Gender: string;
    Username: string;
    Department: string;
    Avatar: string;

    constructor(array){

            // id, firstName, lastName, email, gender, 
            // username, department, avatar

            this.ID = array.id;
            this.FirstName = array.first_name;
            this.LastName = array.last_name;
            this.Email = array.email;
            this.Gender = array.gender;
            this.Username = array.Username;
            this.Department = array.Department;
            this.Avatar = array.Avatar;

    }
}