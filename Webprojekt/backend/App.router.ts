import express from 'express';
import { AppController } from './App.controller';
import { AppMiddleware } from './App.middleware';

const router: express.Router = express.Router();

router.get('/', AppMiddleware.test);

router.get('/objekte',AppMiddleware.objekt);

router.put('/objekte',AppMiddleware.putobjekt);

router.post('/objekte',AppMiddleware.postobjekt);

router.delete('/objekte',AppMiddleware.deleteobjekt);

router.get('/objekte',AppMiddleware.sucheobjekt);

router.get('/objekte',AppMiddleware.filterobjekt);

router.put('/objekte', AppMiddleware.ehrhöheAnzahlI);

router.post('/upload-image',AppMiddleware.uploadImage);
    

/*
----------------------------
router.post("/Route",
    AppMiddleware.test
);
    

router.get;

router.put("/:uuid',");

router.delete("/2");
*/

export { router as AppRouter };