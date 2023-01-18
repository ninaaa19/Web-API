import express from 'express';
import bodyParser from 'body-parser';
import { AppRouter } from './App.router';

const app = express();
const router = express.Router();
const port = 3000;

router.use(bodyParser.json({limit: '50mb'}));
router.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit:50000}));

const objekte = [];

const logger = (req, res, next) => {
    console.log(`Received Request ${new Date(Date.now()).toLocaleString('de-DE')}`);
    console.log('HTTP METHOD', req.method);
    console.log('HTTP BODY', req.body);
    console.log('URL PARAMETER', req.params);
    next();
}

app.use(logger);


app.get('/objekte', (req, res) => {
    const { name } = req.params;
  
})



app.use('/api', router);

router.use('/app', AppRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
