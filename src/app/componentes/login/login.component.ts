import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormBuilder, Validators } from '@angular/forms';

import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mostrarError :boolean = false; 
  mensajeError :string|undefined;

  
  public email :FormControl = new FormControl('', [
    Validators.required, 
    Validators.minLength(5), 
    Validators.maxLength(30), 
    Validators.email
  ]);
  public password :FormControl = new FormControl('', [
    Validators.required, 
    Validators.minLength(8), 
    Validators.maxLength(12),
    Validators.pattern("^[a-zA-Z0-9]*$")
  ]);

  loginForm = this.formBuilder.group({
    email: this.email,
    password: this.password
  })

  constructor( private formBuilder: FormBuilder, private router: Router ) {
  }

  ngOnInit(): void {
  }

  Loguear() {
    this.mostrarError = false;
    let listaUsuarios :Array<Usuario> = JSON.parse(localStorage.getItem("usuarios") || "");
    if (listaUsuarios) {
      listaUsuarios.forEach(usuario => {
        if (usuario.email == this.loginForm.get("email")?.value && usuario.password == this.loginForm.get("password")?.value) {
          console.log(this.loginForm.get("email")?.value);
          localStorage.setItem("usuario", JSON.stringify(usuario));
          this.router.navigate(['']);
        } else {
        this.mensajeError = "Correo y/o Contraseña erronea";
        this.mostrarError = true;
        }
      });
    } else {
      this.mensajeError = "No se pudo conectar al servidor";
      this.mostrarError = true;
    }
  }

  CompletarForm() {
    this.mostrarError = false;
    this.loginForm.setValue({email: "admin@admin.com", password: "12345678"});
  }

  CargarDatos() {
    let usuarios: Array<any> = [
      {nombreUsuario: "Leandro", email: "admin@admin.com", password: "12345678", sexo: "M"},
      {nombreUsuario: "Loser123", email: "loser@loser.com", password: "12345678", sexo: "M"},
      {nombreUsuario: "Filomena", email: "filo@hotmail.com", password: "12345678", sexo: "F"}
    ];
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    console.log("Carga completa");
  }
}
