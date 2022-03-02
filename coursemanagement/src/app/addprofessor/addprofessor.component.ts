import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup,Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addprofessor',
  templateUrl: './addprofessor.component.html',
  styleUrls: ['./addprofessor.component.css']
})
export class AddprofessorComponent implements OnInit {
  professorform:FormGroup

  constructor(private u_service:UsersService,private fb:FormBuilder,private router:Router) { 
    this.professorform=this.fb.group({
      name:['',[Validators.required]],
      email:['',[Validators.required]],
      qualification:['',[Validators.required]],
      working:['',[Validators.required]],
      Current_Job_Position:['',[Validators.required]],
      previous_experience:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
  }
 addProfessor(){
   console.log(this.professorform.value)
   this.u_service.addProfessor(this.professorform.value)
 } 

}
