import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransaccionesService {

  constructor() { }

  getForUser(){
    return  [
      {
        "name": "ingresos",
        "series": [
          {
            "name": new Date(),
            "value": 200
          },
          {
            "name": this.sumarDias(new Date(),1),
            "value": 500
          },
          {
            "name": this.sumarDias(new Date(),2),
            "value": 894
          }
        ]
      },
      {
        "name": "Limite",
        "series": [
          {
            "name": new Date(),
            "value": 1000
          },
          {
            "name": this.sumarDias(new Date(),1),
            "value": 1000
          },
          {
            "name": this.sumarDias(new Date(),2),
            "value": 1000
          }
        ]
      },
    ];
  }
  sumarDias(fecha:Date, dias:number){
    fecha.setDate(fecha .getDate() + dias);
    return fecha;
  }
}
