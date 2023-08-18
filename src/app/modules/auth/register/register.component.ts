import { Component } from '@angular/core';
import { AuthService } from "../sevices/auth.service";
import { Usuario} from "src/app/models/usuario";

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
    usuarios: Usuario =[
      uid:'',
      nombre:'',
      contrasena:''
    ]
    registrarse(){
      const credenciales ={
        nombre: this.usuarios.nombre,
        contrasena: this.usuarios.contrasena
      };
      const res = await this.servicioAuth.registrar(credenciales.nombre, credenciales.contrasena)
    }
}
