import express from 'express';
import { AppController } from './App.controller';
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
            return res.status(200).end(JSON.stringify(await AppController.putobjekt(req.body.id, req.body.typ, req.body.titel, req.body.beschreibung, req.body.adresse, req.body.groesse, req.body.anzahlinteressent)));
        } catch(err) {
            console.error('test err', err);
            return res.status(500).end();
        }
    }

    static async postobjekt(req: express.Request, res: express.Response): Promise<void> {
        try{
            return res.status(200).end(JSON.stringify(await AppController.postobjekt(req.body.id, req.body.typ, req.body.titel, req.body.beschreibung, req.body.adresse, req.body.groesse, req.body.anzahlinteressent)));
        } catch(err) {
            console.error('test err', err);
            return res.status(500).end();
        }
    }

    static async deleteobjekt(req: express.Request, res: express.Response): Promise<void> {
        try{
            return res.status(200).end(JSON.stringify(await AppController.deleteobjekt(req.body.id, req.body.typ, req.body.titel, req.body.beschreibung, req.body.adresse, req.body.groesse, req.body.anzahlinteressent)));
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
}
