import express from 'express';
import { AppMiddleware } from './App.middleware';

const router: express.Router = express.Router();

router.get('/', AppMiddleware.test);
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