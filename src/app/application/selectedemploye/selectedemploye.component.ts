import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employe } from 'src/app/entities/employe';
import { DepartementService } from 'src/app/services/departement.service';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-selectedemploye',
  templateUrl: './selectedemploye.component.html',
  styleUrls: ['./selectedemploye.component.css']
})
export class SelectedemployeComponent implements OnInit {

  employe!:Employe;  
  dep!:string;
  display :boolean = false;
  constructor(private activatedRoute:ActivatedRoute,
    private employeService:EmployeService,
    private depService:DepartementService) { }

  ngOnInit(): void {
    let idEmploye:number = this.activatedRoute.snapshot.params["id"];
    this.employeService.getEmployeById(idEmploye)
    .subscribe(
      data => {
        this.employe = data;
        this.depService.getDepartementById(data.idDep)
            .subscribe(
              value => this.dep = value.nomDep
            )
      }
    )
  }

  onModification(e:Employe){
    this.employe = e;    
  }

}
