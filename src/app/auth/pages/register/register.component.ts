import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from 'src/app/models/register.model';
import { RegisterService } from 'src/app/services/authServices/register.service';
import { Vehicle } from '../../../models/user.model';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {







  registerForm: FormGroup;

  constructor(private formbuilder: FormBuilder, private router: Router, private registerService:RegisterService) {

    this.registerForm = this.formbuilder.group({
      email: ['', [Validators.email, Validators.required]],
      fullName: ['', [Validators.required]],
      address: ['', [Validators.required]],
      cellPhone: ['', [Validators.required]],
      isAccepted: true,
      isDeleted:  false,
      observations: 'usuario final',
      password: ['', [Validators.required, Validators.minLength(4)]],
      vehicle: null,
      rol:  {
        "id": 3,
        "name": "Usuario final",
        "isDeleted": 0
      }
    })
  }

  ngOnInit(): void {
  }

  register(){

    let registerDto:Register = {
      email: this.registerForm.value.email,
      fullName:  this.registerForm.value.fullName,
      address:  this.registerForm.value.address,
      cellPhone: this.registerForm.value.cellPhone.toString(),
      isAccepted:  this.registerForm.value.isAccepted,
      isDeleted:  this.registerForm.value.isDeleted,
      observations:  this.registerForm.value.observations,
      password:  this.registerForm.value.password,
      vehicle:  this.registerForm.value.vehicle,
      rol: {
        id:  this.registerForm.value.rol.id,
        name:  this.registerForm.value.rol.name,
        isDeleted:  this.registerForm.value.rol.isDeleted
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
