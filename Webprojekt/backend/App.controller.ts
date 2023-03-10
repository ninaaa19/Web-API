import { title } from "process";

export class AppController {
  public static objekte = [
    {
      'id': 1,
      'typ': 'Wohnung',
      'titel': 'Wohnung',
      'beschreibung': 'Beispieltext für eine Wohnung',
      'adresse': 'Strasse',
      'groesse': 50,
      'anzahlinteressent': 0
    },
    {
      'id': 2,
      'typ': 'Haus',
      'titel': 'Haus mit Garten',
      'beschreibung': 'Beispieltext für ein Haus',
      'adresse': 'Musterstraße',
      'groesse': 600,
      'anzahlinteressent': 0
    },
    {
      'id': 3,
      'typ': 'Bauplatz',
      'titel': 'Bauplatz',
      'beschreibung': 'Beispieltext für ein Bauplatz',
      'adresse': 'Musterstraße',
      'groesse': 700,
      'anzahlinteressent': 0
    },
    {
      'id': 4,
      'typ': 'Wohnung',
      'titel': 'Wohnung mit Stadtblick',
      'beschreibung': 'Beispieltext für eine Wohnung',
      'adresse': 'Musterstraße',
      'groesse': 500,
      'anzahlinteressent': 0
    },
    {
      'id': 5,
      'typ': 'Wohnung',
      'titel': 'Wohnung',
      'beschreibung': 'Beispieltext für eine Wohnung',
      'adresse': 'Musterstraße',
      'groesse': 50,
      'anzahlinteressent': 0
    },
    {
      'id': 6,
      'typ': 'Wohnung',
      'titel': 'Wohnung',
      'beschreibung': 'Beispieltext für eine Wohnung',
      'adresse': 'Musterstraße',
      'groesse': 50,
      'anzahlinteressent': 0
    },
    {
      'id': 7,
      'typ': 'Wohnung',
      'titel': 'Wohnung',
      'beschreibung': 'Beispieltext für eine Wohnung',
      'adresse': 'Musterstraße',
      'groesse': 50,
      'anzahlinteressent': 0
    },
    {
      'id': 8,
      'typ': 'Wohnung',
      'titel': 'Wohnung',
      'beschreibung': 'Beispieltext für eine Wohnung',
      'adresse': 'Musterstraße',
      'groesse': 50,
      'anzahlinteressent': 0
    },
    {
      'id': 9,
      'typ': 'Wohnung',
      'titel': 'Wohnung',
      'beschreibung': 'Beispieltext für eine Wohnung',
      'adresse': 'Musterstraße',
      'groesse': 50,
      'anzahlinteressent': 0
    },
    {
      'id': 10,
      'typ': 'Wohnung',
      'titel': 'Wohnung',
      'beschreibung': 'Beispieltext für eine Wohnung',
      'adresse': 'Musterstraße',
      'groesse': 50,
      'anzahlinteressent': 0
    }
  ];
  
  static async test() {
    return this.objekte;
  }
  
  static async objekt() {
    return this.objekte;
  }
  static async postobjekt(id: number, typ: string, titel: string, beschreibung: string, adresse: string, groesse: number, anzahlinteressent: number) {
    this.objekte.push({id: id, typ: typ, titel: titel, beschreibung: beschreibung, adresse: adresse, groesse: groesse, anzahlinteressent: anzahlinteressent } )
    return this.objekte;
  }

  static async putobjekt(id: number, typ: string, titel: string, beschreibung: string, adresse: string, groesse: number, anzahlinteressent: number) {
    //Objekt mit der entsprechenden id suchen
    const objektIndex = this.objekte.findIndex((objekt) => objekt.id === id);

    // Wenn das Objekt nicht gefunden wird, Fehler werfen
   if (objektIndex === -1) {
      throw new Error(`Objekt mit id ${id} nicht gefunden.`);
    }

    // Daten des Objekts ändern
    this.objekte[objektIndex].titel = titel;
    this.objekte[objektIndex].beschreibung = beschreibung;
    this.objekte[objektIndex].adresse = adresse;
    this.objekte[objektIndex].groesse = groesse;

  return this.objekte;

  }

  static async deleteobjekt(id: number, typ: string, titel: string, beschreibung: string, adresse: string, groesse: number, anzahlinteressent: number) {
    const indexToDelete = this.objekte.findIndex(objekt => objekt.id === id);
    if (indexToDelete === -1) {
      return console.log('Das Objekt konnte nicht gelöscht werden'); // Wenn das Objekt nicht in der Liste ist, wird false zurückgegeben
    }
    this.objekte.splice(indexToDelete, 1); // Entfernt das Objekt an der gefundenen Index-Position aus der Liste
    return console.log('Das Objekt wurde gelöscht'); // Gibt true zurück, wenn das Objekt erfolgreich entfernt wurde
  }


  static async filterobjekt(id: number, typ: string) {
   
    
    return this.objekte;
  }

  static async sucheobjekt(id: number, typ: string, titel: string, beschreibung: string, adresse: string, groesse: number)  {
    try {
        //let filterTitel = req.query.filterTitel;
        let suchobjekt = this.objekte.findIndex((objekt) => objekt.adresse == adresse);
        let posts = await AppController.objekt();

        if (suchobjekt) {
            posts = posts.filter(post => post.adresse === adresse);
        }

        return this.objekte;
    } catch(err) {
        console.error('test err', err);
        return []; // oder throw err; um den Fehler weiterzuleiten
    }
}
}