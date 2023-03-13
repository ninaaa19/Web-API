import express from 'express';
import { AppController } from './App.controller';
import multer from 'multer';
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
        try{
            return res.status(200).end(JSON.stringify(await AppController.postobjekt(req.body.id, req.body.typ, req.body.titel, req.body.beschreibung, req.body.adresse, req.body.groesse, req.body.anzahlinteressent, req.body.bild)));
        } catch(err) {
            console.error('test err', err);
            return res.status(500).end();
        }
    }

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

    static async filterobjekt(req: express.Request, res: express.Response): Promise<void> {
        try{
            return res.status(200).end(JSON.stringify(await AppController.sucheobjekt(req.body.id, req.body.typ, req.body.titel, req.body.beschreibung, req.body.adresse, req.body.groesse)));
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
