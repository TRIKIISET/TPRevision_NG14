import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departement } from '../entities/departement';

const URL = "http://localhost:3000/departements";
@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  constructor(private http:HttpClient) { }

  getDepartements(): Observable<Departement[]>{
    return this.http.get<Departement[]>(URL);
 }
  getDepartementById(id:number): Observable<Departement>{
     return this.http.get<Departement>(URL+"/"+id);
  }
}
