import { Component, OnInit } from '@angular/core';

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

  Cargar(ev: any = null) {
    let usuario: any = JSON.parse(localStorage.getItem("usuario") || "[]");
    console.log(usuario);
    if (usuario.length != 0) {
      console.log(usuario.user.email);
      this.nombreUsuario = usuario.user.email;
    } else {
      console.log("nadie");
      this.nombreUsuario = "";
    }
  }


}
