import { Component, OnInit } from '@angular/core';  
import { EmployeeService } from '../shared/employee.services';  
import { Employee } from '../shared/employee.model';  
import { Router } from "@angular/router";  

// @Component({  
//   selector: 'app-list-emp',  
//   templateUrl: './list-emp.component.html',  
//   styleUrls: ['./list-emp.component.css']  
// })  
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {  
  
  employees: Employee[];  
  
  constructor(private empService: EmployeeService, private router: Router, ) { }  
  
  ngOnInit() {  
    // this.empService.getEmployees()  
    //   .subscribe((data: Employee[]) => {  
    //     this.employees = data;  
    //   }); 
    this.empService.getEmps()  
      .subscribe((data: Employee[]) => {  
        this.employees = data;  
      });  
  }  
  deleteEmp(employee: Employee): void {  
    this.empService.deleteEmployees(employee.ID)  
      .subscribe(data => {  
        this.employees = this.employees.filter(u => u !== employee);  
      })  
  }  
  editEmp(employee: Employee): void {  
    localStorage.removeItem('editEmpId');  
    localStorage.setItem('editEmpId', employee.ID.toString());  
    this.router.navigate(['add-emp']);  
  }  
}




// import { Component, Input } from '@angular/core';


// interface Alert {
//   type: string;
//   message: string;
// }
// const ALERTS: Alert[] = [{
//   type: 'success',
//   message: 'This is an success alert',
// }, {
//   type: 'info',
//   message: 'This is an info alert',
// }, {
//   type: 'warning',
//   message: 'This is a warning alert',
// }, {
//   type: 'danger',
//   message: 'This is a danger alert',
// }, {
//   type: 'primary',
//   message: 'This is a primary alert',
// }, {
//   type: 'secondary',
//   message: 'This is a secondary alert',
// }, {
//   type: 'light',
//   message: 'This is a light alert',
// }, {
//   type: 'dark',
//   message: 'This is a dark alert',
// }
// ];
// @Component({
//   selector: 'app-employee-list',
//   templateUrl: './employee-list.component.html',
//   styleUrls: ['./employee-list.component.css']
// })
// export class EmployeeListComponent  {
//   alerts: Alert[];
//   constructor() {this.reset(); }

//   close(alert: Alert) {
//     this.alerts.splice(this.alerts.indexOf(alert), 1);
//   }

//   reset() {
//     this.alerts = Array.from(ALERTS);
//   }

// }




// import { Component, OnInit } from '@angular/core';

// import { EmployeeService } from '../shared/employee.service'
// import { Employee } from '../shared/employee.model';
// import { ToastrService } from 'ngx-toastr';    
// @Component({
//   selector: 'app-employee-list',
//   templateUrl: './employee-list.component.html',
//   styleUrls: ['./employee-list.component.css']
// })
// export class EmployeeListComponent implements OnInit {

//   constructor(private employeeService: EmployeeService,private toastr : ToastrService) { }

//   ngOnInit() {
//     this.employeeService.getEmployeeList();
//   }

//   showForEdit(emp: Employee) {
//     this.employeeService.selectedEmployee = Object.assign({}, emp);;
//   }


//   onDelete(id: number) {
//     if (confirm('Are you sure to delete this record ?') == true) {
//       this.employeeService.deleteEmployee(id)
//       .subscribe(x => {
//         this.employeeService.getEmployeeList();
//         this.toastr.warning("Deleted Successfully","Employee Register");
//       })
//     }
//   }
// }