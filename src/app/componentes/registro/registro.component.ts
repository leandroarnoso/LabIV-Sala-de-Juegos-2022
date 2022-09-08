import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';

import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  sexos = ["M", "F"];

  public nombreUsuario :FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3), 
    Validators.maxLength(20),
    Validators.pattern("^[a-zA-Z0-9_]*$")
  ]);
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
  public pswRepeat :FormControl = new FormControl('', [
    Validators.required, 
    Validators.minLength(8), 
    Validators.maxLength(12),
    Validators.pattern("^[a-zA-Z0-9]*$"),
  ]);
  public sexo :FormControl = new FormControl('', [
    Validators.required
  ]);
  public condiciones :FormControl = new FormControl('', [
    Validators.required
  ]);

  registroForm = this.formBuilder.group({
    nombreUsuario : this.nombreUsuario,
    email: this.email,
    password: this.password,
    pswRepeat: this.pswRepeat,
    sexo: this.sexo,
    condiciones: this.condiciones
  });

  constructor( private formBuilder :FormBuilder ) { }

  ngOnInit(): void {
  }

  Registrar() {
    /*let listaUsuarios :Array<Usuario> = JSON.parse(localStorage.getItem("usuarios") || "[]");
    let usuario :Usuario = new Usuario(
      this.registroForm.get('nombreUsuario').value, 
      this.registroForm.get('email').value,
      this.registroForm.get('sexo').value,
      this.registroForm.get('password').value
    );
    if (!listaUsuarios) {
      listaUsuarios = new Array();
    }
    listaUsuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));*/
  }
  

}
