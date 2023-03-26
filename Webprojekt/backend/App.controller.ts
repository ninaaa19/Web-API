import { title } from 'process';
import fs from 'fs';
import path from 'path';
import { post } from 'request';
import { platform } from 'os';

export class AppController {
  public static objekte = [
    {
      'id': 1,
      'typ': 'Wohnung',
      'titel': 'Wohnung im modern Design',
      'beschreibung': 'Mobilierte Wohnung mit hochwertigen Designmöbeln, zentrale Lage in der Innenstadt, sehr Preiswert',
      'adresse': 'Tulpenweg 23',
      'plz':73443,
      'ort':'Heidenheim',
      'groesse': 50,
      'anzahlinteressent': 0,
      'bild': '1.jpg'
    },
    {
      'id': 2,
      'typ': 'Haus',
      'titel': 'Haus mit Garten',
      'beschreibung': 'Einfamilienhaus in ruhiger Lage am Stadtrand mit großem Garten, Garage mit zwei Stellplätzen, Gartenhaus für Gartengeräte, Hochbeet vorhanden',
      'adresse': 'Musterstraße 8',
      'plz':73443,
      'ort':'Heidenheim',
      'groesse': 600,
      'anzahlinteressent': 10,
      'bild': '2.jpg'
    },
    {
      'id': 3,
      'typ': 'Bauplatz',
      'titel': 'Bauplatz',
      'beschreibung': 'Bauplatz am Stadtrand im Neubaugebiet Hochfeld, Baugebiet mit Blick über die Stadt Heidenheim',
      'adresse': 'Baulandstraße 4 ',
      'plz':73443,
      'ort':'Heidenheim',
      'groesse': 700,
      'anzahlinteressent': 3,
      'bild': ''
    },
    {
      'id': 4,
      'typ': 'Wohnung',
      'titel': 'Wohnung mit Stadtblick',
      'beschreibung': 'Wohnung mit Ausblick über die Stadt Heidenheim, schlichtes modernes Design, voll möbiliert mit Einbauküche',
      'adresse': 'Marienstraße 64',
      'plz':73443,
      'ort':'Heidenheim',
      'groesse': 500,
      'anzahlinteressent': 2,
      'bild': '4.jpg'
    },
    {
      'id': 5,
      'typ': 'Wohnung',
      'titel': 'Wohnung im Zentrum',
      'beschreibung': 'Wohnung teilweise möbiliert mit großer Wohnfläche, 3 Zimmer, preiswertes Angebot',
      'adresse': 'Danzigerstraße 54',
      'plz':73443,
      'ort':'Heidenheim',
      'groesse': 50,
      'anzahlinteressent': 7,
      'bild': '5.jpg'
    },
    {
      'id': 6,
      'typ': 'Haus',
      'titel': 'Doppelhaushälfte in ruhiger Lage',
      'beschreibung': 'Doppelhaushälfte mit Terasse und Garten, Penthousebalkon, drei Schlafzimmer, zwei Bäder, Wohn- und Essbereich sowie Stellplatz vor dem Haus',
      'adresse': 'Memelstraße 1',
      'plz':73443,
      'ort':'Heidenheim',
      'groesse': 50,
      'anzahlinteressent': 1,
      'bild': '6.jpg'
    },
    {
      'id': 7,
      'typ': 'Haus',
      'titel': 'Haus im Holzbaustiel',
      'beschreibung': 'Zentrale Lage zur Innenstadt, großer Garten, zwei Stellplätze vor dem Haus, Wohn- und Essbereich, Gäste WC, vier Schlafzimmer und zwei Bäder',
      'adresse': 'Wischauerstraße 6',
      'plz':73443,
      'ort':'Heidenheim',
      'groesse': 50,
      'anzahlinteressent': 0,
      'bild': '7.jpg'
    },
    {
      'id': 8,
      'typ': 'Haus',
      'titel': 'Einfamilienhaus mit Garage',
      'beschreibung': 'Ruhige Lage im Stadtrandgebiet, Garage mit einem Stelplatz und zusätzlichem Stellplatz vor dem Haus, kleiner Garten mit Terasse',
      'adresse': 'Musterstraße 7',
      'plz':73443,
      'ort':'Heidenheim',
      'groesse': 50,
      'anzahlinteressent': 4,
      'bild': ''
    },
    {
      'id': 9,
      'typ': 'Bauplatz',
      'titel': 'Bauplatz im Neubaugebiet',
      'beschreibung': 'Bauplatz für ein Einfamilienhaus',
      'adresse': 'Fünfkirchnerstraße 4',
      'plz':73443,
      'ort':'Heidenheim',
      'groesse': 50,
      'anzahlinteressent': 2,
      'bild': ''
    },
    {
      'id': 10,
      'typ': 'Bauplatz',
      'titel': 'Bauplatz für ein kleines Haus',
      'beschreibung': 'Bauplatz im Altbaugebiet Wasserstall',
      'adresse': 'Kurlandstraße 5',
      'plz':73443,
      'ort':'Heidenheim',
      'groesse': 50,
      'anzahlinteressent': 7,
      'bild': ''
    }
  ];

  
  public static objekteextern = [
    {
      'createdOn': 1667400075, 
      'createdBy': 'Max Musterman', 
      'softwareVersion': '2022-1.3.2', 
      'customer': 'Gut & Unbezahlbar GmbH', 
      'entry': {
      'type': 'house',
      'address': 'Beispielstraße 56',
      'postal': 89522,
      'city': 'Heidenheim an der Brenz',
      'size': 246,
      'comment': 'Ruhige Lage, mitten im Zentrum', 
      'shortHand': 'Objekt AB-246'
      } },
      {
        'createdOn': 1667400075, 
        'createdBy': 'Frieda Fröhlich', 
        'softwareVersion': '3.4.2.6', 
        'customer': 'Studentenbuden AG', 
        'entry': {
        'type': 'apartment',
        'address': 'Am bekannten Platz 28',
        'postal': 89522,
        'city': 'Heidenheim an der Brenz',
        'size': 34,
        'comment': 'Kleine Wohnung für Studenten, Möbiliert, Gute lage, Preiswert', 
        'shortHand': 'Studenten Wohnung am bekannten Platz 28'
        } },
        {
          'createdOn': 1667400075, 
          'createdBy': 'Manfred Stein', 
          'softwareVersion': null, 
          'customer': 'Stein Bauexperte GmbH', 
          'entry': {
          'type': 'construction-site', 
          'address': 'Straße am Fluss 1', 
          'postal': 89522,
          'city': 'Heidenheim an der Brenz', 
          'size': 600,
          'comment': 'Neues Baugebiet, Platz für Wohnungen oder Einfamilienhäuser, Fertigstellung 2076, Preis 750.000',
          'shortHand': 'Bauplatz BP-2022-01' }
          }
    ];
  

  static async test() {
    return this.objekte;
  }
  
  static async objekt() {
    return this.objekte;
  }
  
  static async postobjektextern(type: string, comment: string, shortHand: string, address: string, postal: number, city: string, size: number) {
    let highestId = 0;
    for (const obj of this.objekte) {
      if (obj.id > highestId) {
        highestId = obj.id;
      }
    }
    // Erhöhe die höchste ID um eins und verwende sie als ID für das neue Objekt
    const newId = highestId + 1;
    // Füge das neue Objekt zur Liste der Objekte hinzu und gib die aktualisierte Liste zurück
    this.objekte.push({id: newId, typ: type, titel: shortHand, beschreibung: comment, adresse: address, plz:postal, ort:city, groesse: size, anzahlinteressent: 0, bild: '' } );
    return {id: newId, typ: type, titel: shortHand, beschreibung: comment, adresse:address, plz:postal, ort:city, groesse: size, anzahlinteressent: 0, bild: '' };
  }

  
  static async postobjekt(id: number, typ: string, titel: string, beschreibung: string, adresse: string,  plz:number, ort:string, postal: number, city: string, groesse: number, anzahlinteressent: number, bild: string) {
    // Finde die höchste existierende ID, indem du die Liste der Objekte durchgehst
    //In Seperate Funktion auslagern:
    let highestId = 0;
    for (const obj of this.objekte) {
      if (obj.id > highestId) {
        highestId = obj.id;
      }
    }
    // Erhöhe die höchste ID um eins und verwende sie als ID für das neue Objekt
    const newId = highestId + 1;
    // Füge das neue Objekt zur Liste der Objekte hinzu und gib die aktualisierte Liste zurück
    this.objekte.push({id: newId, typ: typ, titel: titel, beschreibung: beschreibung, adresse: adresse, plz: plz, ort: ort, groesse: groesse, anzahlinteressent: anzahlinteressent, bild: bild } );
    return {id: newId, typ: typ, titel: titel, beschreibung: beschreibung, adresse: adresse, plz: plz, ort: ort, groesse: groesse, anzahlinteressent: anzahlinteressent, bild: bild };
  }

  static async putobjekt(id: number, typ: string, titel: string, beschreibung: string, adresse: string, plz:number, ort:string, groesse: number, anzahlinteressent: number, bild: string) {
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

  static async deleteobjekt(id: number, typ: string, titel: string, beschreibung: string, adresse: string, plz:number, ort:string, groesse: number, anzahlinteressent: number, bild: string) {
    const indexToDelete = this.objekte.findIndex(objekt => objekt.id === id);
    if (indexToDelete === -1) {
      return console.log('Das Objekt konnte nicht gelöscht werden'); // Wenn das Objekt nicht in der Liste ist, wird false zurückgegeben
    }
    /*Aufgabe 3
    if (anzahlinteressent >= 3) {
      return console.log('Das Objekt kann nicht gelöscht werden, da mehr als 3 Interessenten vorhanden sind');
      }
      */
    this.objekte.splice(indexToDelete, 1); // Entfernt das Objekt an der gefundenen Index-Position aus der Liste
    return console.log('Das Objekt wurde gelöscht'); // Gibt true zurück, wenn das Objekt erfolgreich entfernt wurde
  }


  static async filterhaus(id: number, typ: string) {
    const filteredObjekte = this.objekte.filter(obj => obj.typ === 'Haus');
    return filteredObjekte;
    }


  static async filterwohnung(id: number, typ: string) {
    const filteredObjekte = this.objekte.filter(obj => obj.typ === 'Wohnung');
    return filteredObjekte;
  }

  static async filterbauplatz(id: number, typ: string) {
    const filteredObjekte = this.objekte.filter(obj => obj.typ === 'Bauplatz');
    return filteredObjekte;
  }

  static async sucheobjekt(id: number, typ: string, titel: string, beschreibung: string, adresse: string, plz:number, ort:string, groesse: number)  {
   try {
        const posts = this.objekte.filter(post => post.adresse === adresse);
      return posts;
    } catch(err) {
        console.error('test err', err);
        return []; // oder throw err; um den Fehler weiterzuleiten
    }
  }

  static async sucheID(id: number)  {
    try {
         const posts = this.objekte.filter(post => post.id === id);
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
}


}



