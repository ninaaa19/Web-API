import express from 'express';
import { AppController } from './App.controller';
import { AppMiddleware } from './App.middleware';

const router: express.Router = express.Router();

router.get('/', AppMiddleware.test);

router.get('/objekte',AppMiddleware.objekt);

router.put('/objekte',AppMiddleware.putobjekt);

router.post('/objekte',AppMiddleware.postobjekt);

router.post('/objektextern',AppMiddleware.postobjektextern);

router.delete('/objekte',AppMiddleware.deleteobjekt);

router.get('/objektesuchen',AppMiddleware.sucheobjekt);

router.get('/IDsuchen',AppMiddleware.sucheID);

router.get('/hausfiltern',AppMiddleware.filterhaus);
router.get('/wohnungfiltern',AppMiddleware.filterwohnung);
router.get('/bauplatzfiltern',AppMiddleware.filterbauplatz);

router.put('/objekteAnzahlerhoehen', AppMiddleware.ehrhöheAnzahlI);

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