import express from 'express';
import { AppMiddleware } from './App.middleware';

const router: express.Router = express.Router();

/*
Beispiele Reiner:

app.get('/', (req, res) => {
    res.send('Got a GET request');
});

app.post('/', (req, res)=> {
    res.send('Got a POST request');
});

app.put('/test', (req, res) => {
    res.send('Got a PUT request');
});

app.delete('/test', (req, res) => {
    res.send('Got a DELETE request')
});

app.listen(port, () => {
    console.log('Running...');
});


----------------------------
router.post();

router.get;

router.put(/:uuid',);

router.delete(/2);
*/

export { router as AppRouter };