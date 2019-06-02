import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinkComponent } from './home/link/link.component';
import { ReceivablesComponent } from './shared/receivables/receivables.component';
import { LoginComponent } from './home/login/login.component';
import { EmployeeListComponent } from './shared/employee/employee-list/employee-list.component';
import { EmployeeFromComponent } from './shared/employee/employee-from/employee-from.component';
const routes: Routes = [
 { path:'lien-ket',component:LinkComponent},
 { path:'receivables', component: ReceivablesComponent},
 { path: 'dang-nhap', component: LoginComponent},
 { path: 'list-employee', component: EmployeeListComponent},
 { path: 'add-employee', component: EmployeeFromComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
