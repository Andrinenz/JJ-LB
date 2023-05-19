/*-------------------------------------------------------------*/
/*IMPORTS*/
/*-------------------------------------------------------------*/

import { dataWithClasses } from '../data.js';

/*-------------------------------------------------------------*/
/*DECLARATION AND INITIALIZATION*/
/*-------------------------------------------------------------*/

/*-------------------------------------------------------------*/
/*MAIN*/
/*-------------------------------------------------------------*/

const getClass = async (req, res) => {
  if (!req.query.fachrichtung) {
    return res.json({ error: 'Keine Fachrichtung id im request' }).status(400);
  }
  let id = req.query.fachrichtung;

  let fachrichtung = dataWithClasses.find((fach) => fach.fachrichtung === id);

  if (fachrichtung) {
    let classes = fachrichtung.classes;

    return res.json({ result: classes }).status(200);
  } else {
    return res.json({ error: 'Keine Fachrichtung mit dieser id gefunden' });
  }
};

/*-------------------------------------------------------------*/
/*EXPORTS*/
/*-------------------------------------------------------------*/
export default { getClass };
