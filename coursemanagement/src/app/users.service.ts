import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  insertUser(user:any){
    return this.http.post<any>('http://localhost:3000/signup',{user})
    .subscribe((data)=>{
      console.log(data)
    })
  }
  loginUser(user:any){
    return this.http.post<any>('http://localhost:3000/login',{user})
  }
  addProfessor(user:any){
    return this.http.post<any>('http://localhost:3000/addprofessor',{user})
    .subscribe((data)=>{
      console.log(data);
    })
  }
  addStudent(user:any){
    return this.http.post<any>('http://localhost:3000/addstudent',{user})
    .subscribe((data)=>{
      console.log(data);
    })
  }
}
