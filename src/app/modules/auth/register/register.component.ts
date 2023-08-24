import { Component } from '@angular/core';
import { AuthService } from "../sevices/auth.service";
import { Usuario} from "src/app/models/usuario";
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide = true; //input de contraseña
  //definicion de  forma publica del servicio auth
  constructor(public servicioAuth:AuthService){}
  //importacion de modelo
    usuarios: Usuario ={
      uid:'',
      nombre:'',
      contrasena:''
}
   async registrarse(){
      const credenciales ={
        nombre: this.usuarios.nombre,
        contrasena: this.usuarios.contrasena
      };
      const res = await this.servicioAuth.registrar(credenciales.nombre, credenciales.contrasena)
      .then(res=>{
        alert("Ha agregado un nuevo usuario con exito :) ")
      })
      console.log(res)
    }
}
