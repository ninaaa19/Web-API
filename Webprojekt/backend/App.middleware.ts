import express from 'express';
import { AppController } from './App.controller';
//import multer from 'multer';
export class AppMiddleware {


static async test(req: express.Request, res: express.Response): Promise<void> {
        try{
            return res.status(200).end(JSON.stringify(await AppController.test()));
        } catch(err) {
            console.error('test err', err);
            return res.status(500).end();
        }
    }

    static async objekt(req: express.Request, res: express.Response): Promise<void> {
        try{
            return res.status(200).end(JSON.stringify(await AppController.objekt()));
        } catch(err) {
            console.error('test err', err);
            return res.status(500).end();
        }
    }

    static async putobjekt(req: express.Request, res: express.Response): Promise<void> {
        try{
            return res.status(200).end(JSON.stringify(await AppController.putobjekt(req.body.id, req.body.typ, req.body.titel, req.body.beschreibung, req.body.adresse, req.body.groesse, req.body.anzahlinteressent, req.body.bild)));
        } catch(err) {
            console.error('test err', err);
            return res.status(500).end();
        }
    }

    static async postobjekt(req: express.Request, res: express.Response): Promise<void> {
        console.log('postobjekt');
        try{
            return res.status(200).end(JSON.stringify(await AppController.postobjekt(req.body.id, req.body.typ, req.body.titel, req.body.beschreibung, req.body.adresse, req.body.groesse, req.body.anzahlinteressent, req.body.bild)));
        } catch(err) {
            console.error('test err', err);
            return res.status(500).end();
        }
    }
/*
    static async postobjektextern(req: express.Request, res: express.Response): Promise<void> {
        console.log('postobjekt');
        try{
            return res.status(200).end(JSON.stringify(await AppController.postobjektextern(req.body.id, req.body.typ, req.body.titel, req.body.beschreibung, req.body.adresse, req.body.groesse, req.body.anzahlinteressent, req.body.bild, req.body.type, req.body.address, req.body.postal, req.body.city, req.body.size, req.body.comment, req.body.shortHand)));
        } catch(err) {
            console.error('test err', err);
            return res.status(500).end();
        }
    }
*/
    static async deleteobjekt(req: express.Request, res: express.Response): Promise<void> {
        try{
            return res.status(200).end(JSON.stringify(await AppController.deleteobjekt(req.body.id, req.body.typ, req.body.titel, req.body.beschreibung, req.body.adresse, req.body.groesse, req.body.anzahlinteressent, req.body.bild)));
        } catch(err) {
            console.error('test err', err);
            return res.status(500).end();
        }
    }

    static async sucheobjekt(req: express.Request, res: express.Response): Promise<void> {
        try{
            return res.status(200).end(JSON.stringify(await AppController.sucheobjekt(req.body.id, req.body.typ, req.body.titel, req.body.beschreibung, req.body.adresse, req.body.groesse)));
        } catch(err) {
            console.error('test err', err);
            return res.status(500).end();
        }
    }
    static async sucheID(req: express.Request, res: express.Response): Promise<void> {
        try{
            return res.status(200).end(JSON.stringify(await AppController.sucheID(req.body.id, req.body.typ, req.body.titel, req.body.beschreibung, req.body.adresse, req.body.groesse)));
        } catch(err) {
            console.error('test err', err);
            return res.status(500).end();
        }
    }

    static async filterhaus(req: express.Request, res: express.Response): Promise<void> {
        try{
            return res.status(200).end(JSON.stringify(await AppController.filterhaus(req.body.id, req.body.typ)));
        } catch(err) {
            console.error('test err', err);
            return res.status(500).end();
        }
    }

    static async filterwohnung(req: express.Request, res: express.Response): Promise<void> {
        try{
            return res.status(200).end(JSON.stringify(await AppController.filterwohnung(req.body.id, req.body.typ)));
        } catch(err) {
            console.error('test err', err);
            return res.status(500).end();
        }
    }
    static async filterbauplatz(req: express.Request, res: express.Response): Promise<void> {
        try{
            return res.status(200).end(JSON.stringify(await AppController.filterbauplatz(req.body.id, req.body.typ)));
        } catch(err) {
            console.error('test err', err);
            return res.status(500).end();
        }
    }

    static async ehrhöheAnzahlI(req: express.Request, res: express.Response): Promise<void> {
        try{
            return res.status(200).end(JSON.stringify(await AppController.ehrhöheAnzahlI(req.body.id, req.body.anzahlinteressent)));
        } catch(err) {
            console.error('test err', err);
            return res.status(500).end();
        }
    }
    static async uploadImage(req: express.Request, res: express.Response): Promise<void> {
        console.log('uploadImage');
        try{
            return res.status(200).end(JSON.stringify(await AppController.uploadImage(req.body.id, req.body.file)));
        } catch(err) {
            console.error('test err', err);
            return res.status(500).end();
        }
        //Speicherort für hochgeladene Bilder
       /* const storage = multer.diskStorage({
        destination: function (req, file, cb) {
        cb(null, "public/images");
        },
        filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
        },
        });
        

  // Funktion zum Speichern des Bildes
  const saveImage = multer({ storage }).single("image");
        try{
            return res.status(200).end(JSON.stringify(await AppController.uploadImage(req.body.id, req.body.typ, req.body.titel, req.body.beschreibung, req.body.adresse, req.body.groesse, req.body.anzahlinteressent)));
        } catch(err) {
            console.error('test err', err);
            return res.status(500).end();
        }*/
    }
}
