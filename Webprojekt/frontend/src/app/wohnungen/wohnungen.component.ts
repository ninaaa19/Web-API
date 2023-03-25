import { Component, OnInit } from '@angular/core';
import { Objekt } from '../objekt';
import { ObjektService } from '../objekt.service';
import { ObjekteComponent } from '../objekte/objekte.component';

@Component({
  selector: 'app-wohnungen',
  templateUrl: './wohnungen.component.html',
  styleUrls: ['./wohnungen.component.css']
})
export class WohnungenComponent implements OnInit{
  
  constructor(private objektService:ObjektService) { }

  objekte : Objekt[] = [];

  ngOnInit(): void {
    this.objektService.getWohnungen().subscribe((result) => {
      this.objekte = result;
    });
  }
  deleteObjekt(objekt: Objekt) : void {
    this.objektService.deleteObjekt(objekt).subscribe(); 
    this.objekte = this.objekte.filter(obj => obj.id !== objekt.id);
  }

}
