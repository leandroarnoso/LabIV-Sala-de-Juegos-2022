import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
// SERVICIOS
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Input()
  nombreUsuario :string = "";

  @Output() 
  EventDeslogueo: EventEmitter<any> = new EventEmitter<any>();

  constructor( private router: Router, private usuarioServ: UsuarioService ) { }

  ngOnInit(): void {
  }

  Desloguear() {
    this.usuarioServ.Desloguear()
      .then(() => {
        console.log("deslogueado");
        localStorage.removeItem("usuario");
        this.EventDeslogueo.emit(this.EventDeslogueo);
        this.router.navigate(["/"]);
      })
      .catch(error => console.log(error));
    }

}
