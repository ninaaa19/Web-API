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
      groeße: 50,
      },
  
      {
      id: 2,
      titel: "Haus mit Garten",
      beschreibung: "Beispieltext für ein Haus",
      adresse: "Musterstraße",
      groeße: 600,
      },  
  
      {
      id: 3,
      titel: "Bauplatz",
      beschreibung: "Beispieltext für einen Bauplatz",
      adresse: "Musterstraße",
      groeße: 700,
      },
  
      {
      id: 4,
      titel: "Wohnung mit Stadtblick",
      beschreibung: "Beispieltext für eine Wohnung",
      adresse: "Musterstraße",
      groeße: 100,
      },

    ]
    return {objekte};
  }
  constructor() { }
}
