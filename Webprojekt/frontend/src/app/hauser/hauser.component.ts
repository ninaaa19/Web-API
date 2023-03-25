import { Component, OnInit } from '@angular/core';
import { Objekt } from '../objekt';
import { ObjektService } from '../objekt.service';

@Component({
  selector: 'app-hauser',
  templateUrl: './hauser.component.html',
  styleUrls: ['./hauser.component.css']
})
export class HauserComponent implements OnInit {
  constructor(private objektService:ObjektService) { }

  objekte : Objekt[] = [];

  ngOnInit(): void {
    this.objektService.getHauser().subscribe((result) => {
      this.objekte = result;
    });
  }
  deleteObjekt(objekt: Objekt) : void {
    this.objektService.deleteObjekt(objekt).subscribe(); 
    this.objekte = this.objekte.filter(obj => obj.id !== objekt.id);
  }
}
