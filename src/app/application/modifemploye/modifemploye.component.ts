import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {  FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Departement } from '../../entities/departement';
import { Employe } from '../../entities/employe';
import { DepartementService } from '../../services/departement.service';
import { EmployeService } from '../../services/employe.service';

@Component({
  selector: 'app-modifemploye',
  templateUrl: './modifemploye.component.html',
  styleUrls: ['./modifemploye.component.css']
})
export class ModifemployeComponent implements OnInit {

  @Input() employe: Employe;
  @Output() notify= new EventEmitter<Employe>();
  lesDep: Departement[];

  employeForm: FormGroup= new FormGroup({})
  constructor(private depService: DepartementService,
    private fb:FormBuilder,
    private employeService:EmployeService) { }

  ngOnInit(): void {
    this.employeForm = this.fb.group({
       nom:[this.employe.nom, [Validators.required, Validators.pattern('^[a-zA-Z]+( [a-zA-Z]+)+$')]],
       photo: [this.employe.photo, Validators.required],
       dateNaissance: this.employe.dateNaissance,
       adresse: this.fb.group({
          rue:[this.employe.adresse.rue],
          ville: [this.employe.adresse.ville],
          codePostal:this.employe.adresse.codePostal
      }),
       diplomes:this.fb.array([]),
       idDep:[this.employe.idDep],
       poste: [this.employe.poste]  
    })
   
    for(let d of this.employe.diplomes)
      this.diplomes.push(new FormControl(d));
   
    this.depService.getDepartements()
    .subscribe(
      data => this.lesDep = data
    )

  }

  onModifier(){
    this.employeService.updateEmploye(this.employe.id, this.employeForm.value)
    .subscribe(
      data => this.notify.emit(data)
    )
}

  /* Liste des accesseurs */    
      get diplomes(){
    return this.employeForm.get('diplomes') as FormArray;
  }

  onSupprimerDiplome(pos:number){
    this.diplomes.removeAt(pos);
  }

  onAjouterDiplome(){
    this.diplomes.push(new FormControl())
  }

}
