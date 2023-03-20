import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Objekt } from './objekt';


@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const objekte: Objekt[] = [
      {
      id: 1,    
      titel: "Wohnung",
      beschreibung: "Beispieltext für eine Wohnung",
      adresse: "Musterstraße",
      groesse: 50,
      },
  
      {
      id: 2,
      titel: "Haus mit Garten",
      beschreibung: "Beispieltext für ein Haus",
      adresse: "Musterstraße",
      groesse: 600,
      },  
  
      {
      id: 3,
      titel: "Bauplatz",
      beschreibung: "Beispieltext für einen Bauplatz",
      adresse: "Musterstraße",
      groesse: 700,
      },
  
      {
      id: 4,
      titel: "Wohnung mit Stadtblick",
      beschreibung: "Beispieltext für eine Wohnung",
      adresse: "Musterstraße",
      groesse: 100,
      },

    ]
    return {objekte};
  }
  constructor() { }
}
