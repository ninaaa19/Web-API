import { title } from 'process';
import fs from 'fs';
import path from 'path';
//import multer from 'multer'; 
import { post } from 'request';

export class AppController {
  public static objekte = [
    {
      'id': 1,
      'typ': 'Wohnung',
      'titel': 'Wohnung',
      'beschreibung': 'Beispieltext für eine Wohnung',
      'adresse': 'Strasse',
      'groesse': 50,
      'anzahlinteressent': 0,
      'bild': ''
    },
    {
      'id': 2,
      'typ': 'Haus',
      'titel': 'Haus mit Garten',
      'beschreibung': 'Beispieltext für ein Haus',
      'adresse': 'Musterstraße',
      'groesse': 600,
      'anzahlinteressent': 10,
      'bild': ''
    },
    {
      'id': 3,
      'typ': 'Bauplatz',
      'titel': 'Bauplatz',
      'beschreibung': 'Beispieltext für ein Bauplatz',
      'adresse': 'Musterstraße',
      'groesse': 700,
      'anzahlinteressent': 3,
      'bild': ''
    },
    {
      'id': 4,
      'typ': 'Wohnung',
      'titel': 'Wohnung mit Stadtblick',
      'beschreibung': 'Beispieltext für eine Wohnung',
      'adresse': 'Musterstraße',
      'groesse': 500,
      'anzahlinteressent': 2,
      'bild': ''
    },
    {
      'id': 5,
      'typ': 'Wohnung',
      'titel': 'Wohnung',
      'beschreibung': 'Beispieltext für eine Wohnung',
      'adresse': 'Musterstraße',
      'groesse': 50,
      'anzahlinteressent': 7,
      'bild': ''
    },
    {
      'id': 6,
      'typ': 'Wohnung',
      'titel': 'Wohnung',
      'beschreibung': 'Beispieltext für eine Wohnung',
      'adresse': 'Musterstraße',
      'groesse': 50,
      'anzahlinteressent': 1,
      'bild': ''
    },
    {
      'id': 7,
      'typ': 'Wohnung',
      'titel': 'Wohnung',
      'beschreibung': 'Beispieltext für eine Wohnung',
      'adresse': 'Musterstraße',
      'groesse': 50,
      'anzahlinteressent': 0,
      'bild': ''
    },
    {
      'id': 8,
      'typ': 'Wohnung',
      'titel': 'Wohnung',
      'beschreibung': 'Beispieltext für eine Wohnung',
      'adresse': 'Musterstraße',
      'groesse': 50,
      'anzahlinteressent': 4,
      'bild': ''
    },
    {
      'id': 9,
      'typ': 'Wohnung',
      'titel': 'Wohnung',
      'beschreibung': 'Beispieltext für eine Wohnung',
      'adresse': 'Musterstraße',
      'groesse': 50,
      'anzahlinteressent': 2,
      'bild': ''
    },
    {
      'id': 10,
      'typ': 'Wohnung',
      'titel': 'Wohnung',
      'beschreibung': 'Beispieltext für eine Wohnung',
      'adresse': 'Musterstraße',
      'groesse': 50,
      'anzahlinteressent': 7,
      'bild': ''
    }
  ];
  
  static async test() {
    return this.objekte;
  }
  
  static async objekt() {
    return this.objekte;
  }
  static async postobjekt(id: number, typ: string, titel: string, beschreibung: string, adresse: string, groesse: number, anzahlinteressent: number, bild: string) {
    // Finde die höchste existierende ID, indem du die Liste der Objekte durchgehst
    let highestId = 0;
    for (const obj of this.objekte) {
      if (obj.id > highestId) {
        highestId = obj.id;
      }
    }
    // Erhöhe die höchste ID um eins und verwende sie als ID für das neue Objekt
    const newId = highestId + 1;
    // Füge das neue Objekt zur Liste der Objekte hinzu und gib die aktualisierte Liste zurück
    this.objekte.push({id: newId, typ: typ, titel: titel, beschreibung: beschreibung, adresse: adresse, groesse: groesse, anzahlinteressent: anzahlinteressent, bild: bild } );
    return {id: newId, typ: typ, titel: titel, beschreibung: beschreibung, adresse: adresse, groesse: groesse, anzahlinteressent: anzahlinteressent, bild: bild };
  }

  static async putobjekt(id: number, typ: string, titel: string, beschreibung: string, adresse: string, groesse: number, anzahlinteressent: number, bild: string) {
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

  static async deleteobjekt(id: number, typ: string, titel: string, beschreibung: string, adresse: string, groesse: number, anzahlinteressent: number, bild: string) {
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
        //let suchobjekt = this.objekte.findIndex((objekt) => objekt.adresse == adresse);
        //let posts = await AppController.objekt();

     
        const posts = this.objekte.filter(post => post.adresse === adresse);
        

        return posts;
    } catch(err) {
        console.error('test err', err);
        return []; // oder throw err; um den Fehler weiterzuleiten
    }
}
static async ehrhöheAnzahlI(id: number, anzahlinteressent: number) {
  const index = this.objekte.findIndex((objekt) => objekt.id === id);
  this.objekte[index].anzahlinteressent++; // Erhöhe die Anzahl bei diesem Objekt

    return this.objekte[index];

}
static async uploadImage(id: number, file: any) {
  // Verzeichnis für hochgeladene Bilder erstellen
  const index = this.objekte.findIndex((objekt) => objekt.id === id);
  console.log('fileType', file.name.split('.')[1]);
  this.objekte[index].bild = `./bilder/${id}.${file.name.split('.')[1]}`; //'./bilder/' + id + '.' + file.mimetype.split('/')[1];
  const UPLOADS_DIR = path.join('./', 'bilder');
  if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR);
  }
  fs.writeFileSync(path.join(UPLOADS_DIR, `/${id}.${file.name.split('.')[1]}`), file.file.split(',')[1], 'base64');

// Funktion zum Speichern des Bildes auf dem Dateisystem
/*const saveImage = (bild: Express.Multer.File) => {
  const filename = bild;
  const filepath = path.join(UPLOADS_DIR, filename);
  bild.mv(filepath, function(err) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Bild ${filename} erfolgreich hochgeladen`);
  });*/
}


}



