import { Component, OnInit } from '@angular/core';
import { Objekt } from '../objekt';
import { ObjektService } from '../objekt.service';
import { MatDialog } from '@angular/material/dialog';



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
 
  deleteObjekt(objekt: Objekt): void {
    //Aufgabe 3
    if (objekt.anzahlinteressent >= 3) {
      // Wenn die Interessentenanzahl 3 ist, beende die Methode
      
      return;
    }
    // Wenn die Interessentenanzahl nicht 3 ist, lösche das Objekt
    this.objektService.deleteObjekt(objekt).subscribe(); 
    this.objekte = this.objekte.filter(obj => obj.id !== objekt.id);
  }

  
    erhoeheAnzahlI(objekt: Objekt): void {
     //this.objektService.erhöheAnzahlI().subscribe();
     this.objekte = this.objekte.filter(obj => obj.id !== objekt.id);
   }
  
}
