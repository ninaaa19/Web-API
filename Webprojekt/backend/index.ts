import express from 'express';
import bodyParser from 'body-parser';
import { AppRouter } from './App.router';
import { resolve } from 'path';
import  cors from 'cors';


const app = express();
const router = express.Router();
const port = 3000;

app.use('/images',express.static('./bilder'));
router.use(bodyParser.json({limit: '50mb'}));
router.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit:50000}));
import { Objekt }  from './library';

const objekte = [];

app.use(cors({
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200,
  credentials: true
}));

app.use('/api', router);

router.use('/app', AppRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
