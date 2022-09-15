import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// SERVICIOS
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  sexos = ["M", "F"];

  public nombreUsuario: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3), 
    Validators.maxLength(20),
    Validators.pattern("^[a-zA-Z0-9_]*$")
  ]);
  public email: FormControl = new FormControl('', [
    Validators.required, 
    Validators.minLength(5), 
    Validators.maxLength(30), 
    Validators.email
  ]);
  public password: FormControl = new FormControl('', [
    Validators.required, 
    Validators.minLength(8), 
    Validators.maxLength(12),
    Validators.pattern("^[a-zA-Z0-9]*$")
  ]);
  public pswRepeat: FormControl = new FormControl('', [
    Validators.required, 
    Validators.minLength(8), 
    Validators.maxLength(12),
    Validators.pattern("^[a-zA-Z0-9]*$"),
  ]);
  public sexo: FormControl = new FormControl('', [
    Validators.required
  ]);
  public condiciones: FormControl = new FormControl('', [
    Validators.required
  ]);

  registroForm = this.formBuilder.group({
    nombreUsuario: this.nombreUsuario,
    email: this.email,
    password: this.password,
    pswRepeat: this.pswRepeat,
    sexo: this.sexo,
    condiciones: this.condiciones
  });

  constructor( 
    private formBuilder: FormBuilder, 
    private router: Router,
    private usuarioServ: UsuarioService ) { 

  }

  ngOnInit(): void {
  }

  Registrar() {
    this.usuarioServ.Registrar(this.registroForm.value)
      .then(respuesta1 => {
        console.log("rRegistro "+respuesta1);
        this.usuarioServ.Loguear(this.registroForm.value)
          .then(respuesta2 => {
            localStorage.setItem("usuario", JSON.stringify(respuesta2));
            this.router.navigate(["/"]);
            console.log("rLogin "+respuesta2);
          })
          .catch(error2 => console.log("eLogin "+error2));
      })
      .catch(error1 => console.log("eRegistro "+error1));
  }
  
}
