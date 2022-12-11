import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Departement } from 'src/app/entities/departement';
import { DepartementService } from 'src/app/services/departement.service';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-ajoutemploye',
  templateUrl: './ajoutemploye.component.html',
  styleUrls: ['./ajoutemploye.component.css']
})
export class AjoutemployeComponent implements OnInit {

  lesDep: Departement[];

  employeForm: FormGroup= new FormGroup({})
  constructor(private depService: DepartementService,
    private fb:FormBuilder,
    private employeService:EmployeService,
    private router:Router) { }

  ngOnInit(): void {
    this.employeForm = this.fb.group({
       nom:['', [Validators.required, Validators.pattern('^[a-zA-Z]+( [a-zA-Z]+)+$')]],
       photo: ['', Validators.required],
       dateNaissance: [''],
       adresse: this.fb.group({
          rue:[''],
          ville: [''],
          codePostal:[]
      }),
       diplomes:this.fb.array([]),
       idDep:[1],
       poste: ['Ingénieur']  
    })
   
   
    this.depService.getDepartements()
    .subscribe(
      data => this.lesDep = data
    )
  }

  onAjouter(){
    this.employeService.ajouterEmploye( this.employeForm.value)
    .subscribe(
      data => this.router.navigate(['/lesemployes'])
    )
}

  /* Liste des accesseurs */    
      get diplomes(){
    return this.employeForm.get('diplomes') as FormArray;
  }

  get nom(){
    return this.employeForm.get('nom');
  }
  get photo(){
    return this.employeForm.controls['photo'];
  }

  onAjouterDiplome(){
    this.diplomes.push(new FormControl())
  }

}
