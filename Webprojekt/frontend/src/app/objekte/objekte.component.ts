import { Component, OnInit } from '@angular/core';
import { Objekt } from '../objekt';
import { ObjektService } from '../objekt.service';


@Component({
  selector: 'app-objekte',
  templateUrl: './objekte.component.html',
  styleUrls: ['./objekte.component.css']
})
export class ObjekteComponent implements OnInit {

  constructor(private objektService:ObjektService) { }

  objekte : Objekt[] = [];

  ngOnInit(): void {
    this.objektService.getObjekte().subscribe((result) => {
      this.objekte = result;
    });
  }

  deleteObjekt(objekt: Objekt) : void {
    this.objektService.deleteObjekt(objekt).subscribe(); 
    this.objekte = this.objekte.filter(o => o == objekt);
  }
}
