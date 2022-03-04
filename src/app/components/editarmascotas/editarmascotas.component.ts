import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MascotaService } from 'src/app/service/mascota.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-editarmascotas',
  templateUrl: './editarmascotas.component.html',
  styleUrls: ['./editarmascotas.component.css']
})
export class EditarmascotasComponent implements OnInit {

  crearmascota: FormGroup;
  submited =false;
  id:string | null;
  titulo = 'AGREGAR LOCAL'

  constructor(
              private fb: FormBuilder,
              private mascotaServicio: MascotaService,
              private router: Router,
              private aRoute: ActivatedRoute)
    {
      this.crearmascota = this.fb.group(
        {
          duenio: ['', Validators.required],
          nombre: ['', Validators.required],
          especie: ['', Validators.required],
          raza: ['', Validators.required],
          domicilio: ['', Validators.required],
        })
        this.id = this.aRoute.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {
  }

  agregareditarmascota()
  {
    this.submited=true;
    if(this.crearmascota.invalid)
    {
      return;
    }
    if(this.id === null){
      this.agregarmascota();
    }else{
      this.editarmas(this.id);
    }
  }

  agregarmascota()
  {
    const mascota: any ={
      duenio:this.crearmascota.value.duenio,
      nombre:this.crearmascota.value.nombre,
      especie:this.crearmascota.value.especie,
      raza:this.crearmascota.value.raza,
      domicilio:this.crearmascota.value.domicilio,

      fechacreacion: new Date(),
      fechaactualizacion: new Date()
    }
    this.mascotaServicio.agregarmascota(mascota).then(() =>{
      console.log('registrado');
      this.router.navigate(['/mascotas'])
    }).catch(error => {
      console.log(error);
    })
  }

  editarmas(id: string)
  {
    const mascota: any ={
      duenio:this.crearmascota.value.duenio,
      nombre:this.crearmascota.value.nombre,
      especie:this.crearmascota.value.especie,
      raza:this.crearmascota.value.raza,
      domicilio:this.crearmascota.value.domicilio,

      fechaactualizacion: new Date()
    }
    this.mascotaServicio.actualizarmascota(id, mascota).then(()=> {
      this.router.navigate(['/mascotas']);
    })

  }


  editarmascota()
  {
    if(this.id !== null){
      this.mascotaServicio.editarmascota(this.id).subscribe(data =>{
        this.crearmascota.setValue({
          duenio: data.payload.data()['duenio'],
          nombre: data.payload.data()['nombre'],
          especie: data.payload.data()['especie'],
          raza: data.payload.data()['raza'],
          domicilio: data.payload.data()['domicilio']
        })
      })
    }
  }

}
