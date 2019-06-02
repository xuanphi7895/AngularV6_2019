  import { Injectable } from '@angular/core';
  import { HttpClient,HttpHeaders } from '@angular/common/http';  
import { Employee } from './employee.model'; 
@Injectable({  
    providedIn: 'root'  
  }) 
  export class EmployeeService {  
  
    constructor(private http: HttpClient) { }  
    baseUrl: string = 'https://jsonplaceholder.typicode.com/users/'; 
    // baseUrl: string = ' http://localhost:59452/api/Emp';
    getEmps() {  
      let headers = new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Methods':'GET, POST',
                'Access-Control-Allow-Origin': '*'
             });
             let options = {
                headers: headers
             }
      return this.http.get('http://localhost:59452/api/Emp',options);
    }

    getEmployees() {  
      return this.http.get<Employee[]>(this.baseUrl);  
    }  
    deleteEmployees(id: number) {  
      return this.http.delete<Employee[]>(this.baseUrl + id);  
    }  
    createUser(employee: Employee) {  
      return this.http.post(this.baseUrl, employee);  
    }  
    getEmployeeById(id: number) {  
      return this.http.get<Employee>(this.baseUrl + '/' + id);  
    }  
    updateEmployee(employee: Employee) {  
      return this.http.put(this.baseUrl + '/' + employee.ID, employee);  
    }  
  }  
// import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
// // import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';

// import {Employee} from'./employee.model'

// @Injectable()
// export class EmployeeService {

//   selectedEmployee : Employee;
//   employeeList : Employee[];
//   constructor(private http : Http) { }

//   postEmployee(emp : Employee){
//     var body = JSON.stringify(emp);
//     var headerOptions = new Headers({'Content-Type':'application/json'});
//     var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
//     return this.http.post('http://localhost:28750/api/Employee',body,requestOptions).map(x => x.json());
//   }

//   putEmployee(id, emp) {
//     var body = JSON.stringify(emp);
//     var headerOptions = new Headers({ 'Content-Type': 'application/json' });
//     var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
//     return this.http.put('http://localhost:28750/api/Employee/' + id,
//       body,
//       requestOptions).map(res => res.json());
//   }
//   getEmployeeList(){
//     this.http.get('http://localhost:28750/api/Employee')
//     .map((data : Response) =>{
//       return data.json() as Employee[];
//     }).toPromise().then(x => {
//       this.employeeList = x;
//     })
//   }

//   deleteEmployee(id: number) {
//     return this.http.delete('http://localhost:28750/api/Employee/' + id).map(res => res.json());
//   }
// }