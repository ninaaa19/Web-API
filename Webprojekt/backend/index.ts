import express from 'express';
import bodyParser from 'body-parser';
import { AppRouter } from './App.router';
import { resolve } from 'path';
import connection from './db';


const app = express();
const router = express.Router();
const port = 3000;


router.use(bodyParser.json({limit: '50mb'}));
router.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit:50000}));
const lib = require('./library');

const objekte = [];

//Abruf Datenbank
app.get('/', (req, res) => {
    connection.query('SELECT * FROM table_name', (error, results, fields) => {
      if (error) throw error;
      res.send(results);
    });
  });


/*

const logger = (req, res, next) => {
    console.log(`Received Request ${new Date(Date.now()).toLocaleString('de-DE')}`);
    console.log('HTTP METHOD', req.method);
    console.log('HTTP BODY', req.body);
    console.log('URL PARAMETER', req.params);
    next();
}
app.use(logger);
*/

/*
app.get('/objekt', (req, res) => {
   if (objekte.length == 0) {
       resolveNotFound(res, 'No objekts found')
   }else {
       res.statusCode = 200;
       res.json(objekte);
       res.end();
   }
});

*/

app.use('/api', router);

router.use('/app', AppRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

/*
function getObjektIndex(name) {
    return objekte.findIndex((objekt) => objekt.name === name);
}

function getObjekt(name) {
    return objekte.find((objekt) => objekt.name === name);
}

function resolveNotFound(res, message) {
    res.statusCode = 404;
    res.send(message);
    res.end();
    return;
}
function resolveBadRequest(res, message) {
    res.statusCode = 400;
    res.send(message);
    res.end();
    return;
}
*/