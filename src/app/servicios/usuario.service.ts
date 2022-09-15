import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor( private auth: Auth, private firestore: Firestore ) { 
  }

  Registrar({email, password}: any) {
    return createUserWithEmailAndPassword(this.auth, email, password)
  }

  Loguear({email, password}: any) {
    return signInWithEmailAndPassword(this.auth, email, password)
  }

  Desloguear() {
    return signOut(this.auth)
  }

}

