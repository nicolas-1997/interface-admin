import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from 'src/app/models/register.model';
import { RegisterService } from 'src/app/services/authServices/register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  @Input() title:string = '';
  rolID:number = 0;
  rolName:string = '';


  registerForm: FormGroup;

  constructor(private formbuilder: FormBuilder, private router: Router, private registerService:RegisterService) {

    this.registerForm = this.formbuilder.group({
      email: ['', [Validators.email, Validators.required]],
      fullName: ['', [Validators.required]],
      address: ['', [Validators.required]],
      cellPhone: ['', [Validators.required]],
      observations: 'Administrador',
      password: ['', [Validators.required, Validators.minLength(4)]]
    })
  }

  ngOnInit(): void {
  }

  register(){
    if(this.title == 'Administrador'){
      this.rolID = 1
      this.rolName = 'Administrador'
    }
    else if(this.title == 'Cadete'){
      this.rolID = 2
      this.rolName = 'Cadete'
    }
    let registerDto:Register = {
      email: this.registerForm.value.email,
      fullName:  this.registerForm.value.fullName,
      address:  this.registerForm.value.address,
      cellPhone: this.registerForm.value.cellPhone.toString(),
      isAccepted: true,
      isDeleted:  false,
      observations:  this.registerForm.value.observations,
      password:  this.registerForm.value.password,
      vehicle:  null,
      rol: {
        id: this.rolID,
        name:   this.rolName,
        isDeleted: 0
      }
    }

    console.log(registerDto)

    this.registerService.register(registerDto).subscribe(
      resp => {
        console.log(resp)
      }
    )
  }
}
