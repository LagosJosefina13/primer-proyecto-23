import { Component,OnInit } from '@angular/core';
//Importamos nuestra interfaz
import { TarjetasInicio } from 'src/app/models/modelos';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  //Propiedad Publica (tipo array)
  public info: TarjetasInicio[];

//Inicializa la propiedad Info
  constructor(){
    this.info=[
     {
      titulo: "Tarjeta 1",
     descripcion:"Foto de un michi",
      imagen:"https://images.ecestaticos.com/x0lO0Xy0zitom1L4KCw-c7exfXc=/0x0:0x0/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F7bb%2Fb16%2Fd02%2F7bbb16d02adf2f25845bf84abaacc7de.jpg",
      alt:""
    }
    ]
  }
ngOnInit():void{

}
}
[]
