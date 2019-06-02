import { Component, OnInit } from '@angular/core';  
import { FormBuilder, FormGroup, Validators } from "@angular/forms";  
import { EmployeeService } from '../shared/employee.services';  
import { Router } from "@angular/router";  
  
// @Component({  
//   selector: 'app-add-emp',  
//   templateUrl: './add-emp.component.html',  
//   styleUrls: ['./add-emp.component.css']  
// })  
@Component({
  selector: 'app-employee-from',
  templateUrl: './employee-from.component.html',
  styleUrls: ['./employee-from.component.css']
})
export class EmployeeFromComponent implements OnInit {  
  
  empformlabel: string = 'Add Employee';  
  empformbtn: string = 'Save';  
  constructor(private formBuilder: FormBuilder, private router: Router, private empService: EmployeeService) {  
  }  
  
  addForm: FormGroup;  
  btnvisibility: boolean = true;  
  ngOnInit() {  
  
    this.addForm = this.formBuilder.group({  
      id: [],  
      employee_name: ['', Validators.required],  
      employee_salary: ['', [Validators.required, Validators.maxLength(9)]],  
      employee_age: ['', [Validators.required, Validators.maxLength(3)]]  
    });  
  
    let empid = localStorage.getItem('editEmpId');  
    if (+empid > 0) {  
      this.empService.getEmployeeById(+empid).subscribe(data => {  
        this.addForm.patchValue(data);  
      })  
      this.btnvisibility = false;  
      this.empformlabel = 'Edit Employee';  
      this.empformbtn = 'Update';  
    }  
  }  
  onSubmit() {  
    console.log('Create fire');  
    this.empService.createUser(this.addForm.value)  
      .subscribe(data => {  
        this.router.navigate(['list-emp']);  
      },  
      error => {  
        alert(error);  
      });  
  }  
  onUpdate() {  
    console.log('Update fire');  
    this.empService.updateEmployee(this.addForm.value).subscribe(data => {  
      this.router.navigate(['list-emp']);  
    },  
      error => {  
        alert(error);  
      });  
  }  
}  

// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-employee-from',
//   templateUrl: './employee-from.component.html',
//   styleUrls: ['./employee-from.component.css']
// })
// export class EmployeeFromComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }


// import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms'

// import { EmployeeService } from '../shared/employee.service'
// import { ToastrService } from 'ngx-toastr'
// @Component({
//   selector: 'app-employee',
//   templateUrl: './employee.component.html',
//   styleUrls: ['./employee.component.css']
// })
// export class EmployeeComponent implements OnInit {

//   constructor(private employeeService: EmployeeService, private toastr: ToastrService) { }

//   ngOnInit() {
//     this.resetForm();
//   }

//   resetForm(form?: NgForm) {
//     if (form != null)
//       form.reset();
//     this.employeeService.selectedEmployee = {
//       EmployeeID: null,
//       FirstName: '',
//       LastName: '',
//       EmpCode: '',
//       Position: '',
//       Office: ''
//     }
//   }

//   onSubmit(form: NgForm) {
//     if (form.value.EmployeeID == null) {
//       this.employeeService.postEmployee(form.value)
//         .subscribe(data => {
//           this.resetForm(form);
//           this.employeeService.getEmployeeList();
//           this.toastr.success('New Record Added Succcessfully', 'Employee Register');
//         })
//     }
//     else {
//       this.employeeService.putEmployee(form.value.EmployeeID, form.value)
//       .subscribe(data => {
//         this.resetForm(form);
//         this.employeeService.getEmployeeList();
//         this.toastr.info('Record Updated Successfully!', 'Employee Register');
//       });
//     }
//   }
// }