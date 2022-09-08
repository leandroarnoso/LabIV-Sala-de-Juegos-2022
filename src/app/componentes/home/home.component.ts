import { Component, OnInit } from '@angular/core';

import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  titulo :string = "SALA DE JUEGOS";
  nombreUsuario :string = "";
  
  constructor() { }

  ngOnInit(): void {
    this.Cargar();
  }

  Cargar(ev :any = null) {
    let usuario: Usuario = JSON.parse(localStorage.getItem("usuario") || "[]");
    if (usuario) {
      this.nombreUsuario = usuario.nombreUsuario;
    } else {
      this.nombreUsuario = "";
    }
  }


}
