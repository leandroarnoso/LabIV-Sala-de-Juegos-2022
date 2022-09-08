import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { SexoPipe } from './pipes/sexo.pipe';
import { HeaderComponent } from './componentes/header/header.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    QuienSoyComponent,
    NoEncontradoComponent,
    SexoPipe,
    HeaderComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
