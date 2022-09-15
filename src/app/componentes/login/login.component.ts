import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
// SERVICIOS
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //mostrarError :boolean = false; 
  //mensajeError :string|undefined;

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

  constructor( 
    private formBuilder: FormBuilder, 
    private router: Router, 
    private usuarioServ: UsuarioService ) {
  }

  ngOnInit(): void {
  }

  Loguear() {
    this.usuarioServ.Loguear(this.loginForm.value)
      .then(respuesta => {
        localStorage.setItem("usuario", JSON.stringify(respuesta));
        this.router.navigate(["/"]);
        console.log(respuesta);
    })
      .catch(error => console.log(error));
  }

  CompletarForm() {
    this.loginForm.setValue({email: "admin@admin.com", password: "123456789"});
  }

}
