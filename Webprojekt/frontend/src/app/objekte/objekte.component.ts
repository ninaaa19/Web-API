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
      // Wenn die Interessentenanzahl 3 ist, zeige eine Fehlermeldung an und beende die Methode
      //this.dialog.open(DialogComponent, {data: {message: 'Das Objekt kann nicht gelöscht werden.'}});
      return;
    }
    // Wenn die Interessentenanzahl nicht 3 ist, lösche das Objekt wie gewohnt
    this.objektService.deleteObjekt(objekt).subscribe(); 
    this.objekte = this.objekte.filter(obj => obj.id !== objekt.id);
  }
  
  
}
