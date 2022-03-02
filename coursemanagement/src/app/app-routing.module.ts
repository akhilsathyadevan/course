import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddprofessorComponent } from './addprofessor/addprofessor.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfessorComponent } from './professor/professor.component';
import { SignupComponent } from './signup/signup.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:'addp',component:AddprofessorComponent},
{path:'signup',component:SignupComponent},
{path:'login',component:LoginComponent},
{path:'adds',component:AddstudentComponent},
{path:'student',component:StudentComponent},
{path:'professor',component:ProfessorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
