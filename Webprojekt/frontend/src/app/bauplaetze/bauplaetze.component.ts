import { Component, OnInit } from '@angular/core';
import { Objekt } from '../objekt';
import { ObjektService } from '../objekt.service';

@Component({
  selector: 'app-bauplaetze',
  templateUrl: './bauplaetze.component.html',
  styleUrls: ['./bauplaetze.component.css']
})
export class BauplaetzeComponent implements OnInit{
  constructor(private objektService:ObjektService) { }

  objekte : Objekt[] = [];

  ngOnInit(): void {
    this.objektService.getBauplaetze().subscribe((result) => {
      this.objekte = result;
    });
  }
  deleteObjekt(objekt: Objekt) : void {
    this.objektService.deleteObjekt(objekt).subscribe(); 
    this.objekte = this.objekte.filter(obj => obj.id !== objekt.id);
  }

}
