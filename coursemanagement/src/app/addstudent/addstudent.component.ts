import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
  studentform:FormGroup

  constructor(private u_service:UsersService,private fb:FormBuilder,private router:Router) {
    var id=localStorage.getItem('id');
    console.log(id);
    this.studentform=this.fb.group({
      _id:id,
      name:['',[Validators.required]],
      email:['',[Validators.required]],
      qualification:['',[Validators.required]],
      markpercent:['',[Validators.required]],
      passout_year:['',[Validators.required]]
    })
   }

  ngOnInit(): void {
  }
  addStudent(){
    console.log(this.studentform.value)
    this.u_service.addStudent(this.studentform.value);    
  }

}
