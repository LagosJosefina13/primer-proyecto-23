import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //referencia Autentificacion

  constructor(public auth: AngularFireAuth) {
   }
   registrar (nombre: string, contrasena: string){
    //retorna nueva informacion
    return this.auth.createUserWithEmailAndPassword(nombre, contrasena)
   }
}
