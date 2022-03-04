import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/models/mascota';
import { MascotaService } from 'src/app/service/mascota.service';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent implements OnInit {
  objetomascota: any[] = [];


  constructor(private mascotaServicio: MascotaService) 
  {
  }

  ngOnInit(): void {
    this.obtenermascota();
  }

  obtenermascota(){
    this.mascotaServicio.capturarmascota().subscribe(data => {
      this.objetomascota =[];
      data.forEach((element: any) => {
        this.objetomascota.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        });
      });
      console.log(this.objetomascota);
    });
  }

  eliminarmasc(id: string){
    this.mascotaServicio.eliminarmascota(id).then(()=>
    {
      console.log('eliminado');
    }).catch(error => {
      console.log(error);
    });
  }


}
