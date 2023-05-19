/*-------------------------------------------------------------*/
/*IMPORTS*/
/*-------------------------------------------------------------*/

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import classController from './controller/class-controller.js';
import fachrichtungController from './controller/fachrichtung-controller.js';

/*-------------------------------------------------------------*/
/*DECLARATION AND INITIALIZATION*/
/*-------------------------------------------------------------*/

const PORT = 8080;

const app = express();

/*-------------------------------------------------------------*/
/*MAIN*/
/*-------------------------------------------------------------*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ origin: '*' }));

// Routes

app.get('/getClass', classController.getClass);

app.get('/getFachrichtungen', fachrichtungController.getFachrichtungen);

app.listen(PORT);
console.log('Server is listening on Port 8080');
/*-------------------------------------------------------------*/
/*EXPORTS*/
/*-------------------------------------------------------------*/
