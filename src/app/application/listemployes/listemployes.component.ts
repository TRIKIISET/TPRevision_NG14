import { Component, OnInit } from '@angular/core';
import { Employe } from 'src/app/entities/employe';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-listemployes',
  templateUrl: './listemployes.component.html',
  styleUrls: ['./listemployes.component.css']
})
export class ListemployesComponent implements OnInit {

  lesemployes: Employe[]=[];
  constructor(private employeService: EmployeService) { }

  ngOnInit(): void {
    this.employeService.getEmployes()
    .subscribe(
      data => this.lesemployes = data
    )
  }

  onRechercher(chaine:string){
    this.lesemployes = this.lesemployes.filter
     (e => e.nom.toLowerCase().search(chaine.toLowerCase())>=0);
  }
  onSuppression(id:number){
    this.lesemployes = this.lesemployes.filter(e => e.id !=id)  }

}
