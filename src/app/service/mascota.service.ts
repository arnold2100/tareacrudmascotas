import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  constructor(private firestore: AngularFirestore) { }

  agregarmascota(mascota: any): Promise<any>
  {
    return this.firestore.collection('Mascota').add(mascota);
  }

  capturarmascota(): Observable<any>
  {
    return this.firestore.collection('Mascota', ref => ref.orderBy('fechacreacion', 'asc')).snapshotChanges();
  }

  eliminarmascota(id:string): Promise<any> 
  {
    return this.firestore.collection('Mascota').doc(id).delete();
  }

  editarmascota(id: string): Observable<any> 
  {
    return this.firestore.collection('Mascota').doc(id).snapshotChanges();
  }

  actualizarmascota(id: string, data:any): Promise<any>
  {
    return this.firestore.collection('Mascota').doc(id).update(data);
  }
}
