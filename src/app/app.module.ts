import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http' ;
import { ColorPickerModule } from 'ngx-color-picker';
import { AppRoutingModule } from './app-routing.module';  
import { AppComponent } from './app.component';
import { ReceivablesComponent } from './shared/receivables/receivables.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LinkComponent } from './home/link/link.component';
import { HeaderComponent } from './home/header/header.component';
import { AboutComponent } from './home/about/about.component';
import { LoginComponent } from './home/login/login.component';
import { EmployeeComponent } from './shared/employee/employee.component';
import { EmployeeListComponent } from './shared/employee/employee-list/employee-list.component';
import { EmployeeFromComponent } from './shared/employee/employee-from/employee-from.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from './shared/employee/shared/employee.services';

@NgModule({
  declarations: [
    AppComponent,
    ReceivablesComponent,
    NavbarComponent,
    LinkComponent,
    HeaderComponent,
    AboutComponent,
    LoginComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeFromComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ColorPickerModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
