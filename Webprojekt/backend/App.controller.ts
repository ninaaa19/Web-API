import { title } from "process";

export class AppController {
  public static objekte = [
    {
      'id': 1,
      'titel': 'Wohnung',
      'beschreibung': 'Beispieltext für eine Wohnung',
      'adresse': 'Musterstraße',
      'groesse': 50
    },
    {
      'id': 2,
      'titel': 'Haus mit Garten',
      'beschreibung': 'Beispieltext für ein Haus',
      'adresse': 'Musterstraße',
      'groesse': 600
    },
    {
      'id': 3,
      'titel': 'Bauplatz',
      'beschreibung': 'Beispieltext für ein Bauplatz',
      'adresse': 'Musterstraße',
      'groesse': 700
    },
    {
      'id': 4,
      'titel': 'Wohnung mit Stadtblick',
      'beschreibung': 'Beispieltext für eine Wohnung',
      'adresse': 'Musterstraße',
      'groesse': 500
    },
    {
      'id': 5,
      'titel': 'Wohnung',
      'beschreibung': 'Beispieltext für eine Wohnung',
      'adresse': 'Musterstraße',
      'groesse': 50
    },
    {
      'id': 6,
      'titel': 'Wohnung',
      'beschreibung': 'Beispieltext für eine Wohnung',
      'adresse': 'Musterstraße',
      'groesse': 50
    },
    {
      'id': 7,
      'titel': 'Wohnung',
      'beschreibung': 'Beispieltext für eine Wohnung',
      'adresse': 'Musterstraße',
      'groesse': 50
    },
    {
      'id': 8,
      'titel': 'Wohnung',
      'beschreibung': 'Beispieltext für eine Wohnung',
      'adresse': 'Musterstraße',
      'groesse': 50
    },
    {
      'id': 9,
      'titel': 'Wohnung',
      'beschreibung': 'Beispieltext für eine Wohnung',
      'adresse': 'Musterstraße',
      'groesse': 50
    },
    {
      'id': 10,
      'titel': 'Wohnung',
      'beschreibung': 'Beispieltext für eine Wohnung',
      'adresse': 'Musterstraße',
      'groesse': 50
    },
    {
      'id': 11,
      'titel': 'Wohnung',
      'beschreibung': 'Beispieltext für eine Wohnung',
      'adresse': 'Musterstraße',
      'groesse': 50
    },
    {
      'id': 12,
      'titel': 'Wohnung',
      'beschreibung': 'Beispieltext für eine Wohnung',
      'adresse': 'Musterstraße',
      'groesse': 50
    },
    {
      'id': 13,
      'titel': 'Wohnung',
      'beschreibung': 'Beispieltext für eine Wohnung',
      'adresse': 'Musterstraße',
      'groesse': 50
    },
    {
      'id': 14,
      'titel': 'Wohnung',
      'beschreibung': 'Beispieltext für eine Wohnung',
      'adresse': 'Musterstraße',
      'groesse': 50
    }
  ];
  
  static async test() {
    return this.objekte;
  }
  
  static async objekt() {
    return this.objekte;
  }
  static async postobjekt(id: number, titel: string, beschreibung: string, adresse: string, groesse: number) {
    this.objekte.push({id: id, titel: titel, beschreibung: beschreibung, adresse: adresse, groesse: groesse } )
    return this.objekte;
  }

  static async putobjekt(id: number, titel: string, beschreibung: string, adresse: string, groesse: number) {
    return this.objekte;

  }

  static async deleteobjekt(id: number, titel: string, beschreibung: string, adresse: string, groesse: number) {
    
    return this.objekte;
  }


}