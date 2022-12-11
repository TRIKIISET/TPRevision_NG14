import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employe } from 'src/app/entities/employe';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  @Input() employe: Employe;
  @Input() position: number;
  @Output() notify = new EventEmitter<number>();
  constructor(private employeService: EmployeService) { }

  ngOnInit(): void {
  }
  onSupprimer(id:number){
    this.employeService.deleteEmploye(id)
    .subscribe(
        ()=>this.notify.emit(id)
    )
  }

}
