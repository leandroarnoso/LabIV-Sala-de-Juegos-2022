import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input()
  titulo :string = "";
  @Input()
  nombreUsuario :string = "";

  @Output() 
  EventDeslogueo: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  Cargar(ev :any) {
    this.EventDeslogueo.emit(ev);
  }

}
