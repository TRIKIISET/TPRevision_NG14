import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employe } from '../entities/employe';

const URL = "http://localhost:3000/employes";
@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  constructor(private http:HttpClient) { }
   getEmployes(): Observable<Employe[]>{
        return this.http.get<Employe[]>(URL);
   }

   getEmployeById(id:number):Observable<Employe>{
     return this.http.get<Employe>(URL+"/"+ id);
   }
  
   updateEmploye(id:number, emp:Employe): Observable<Employe>{
     return this.http.put<Employe>(URL+"/"+id, emp);
   }

   deleteEmploye(id:number){
     return this.http.delete(URL+"/"+id);
   }

   ajouterEmploye(emp:Employe):Observable<Employe>{
     return this.http.post<Employe>(URL, emp);
   }
}
