const express = require('express');

const app = express();
const path = require('path');
const db = require('./models/db.js');

const PORT = 3000;

// flow test for incoming requests
app.use((req, res, next) => {
  console.log(`
    ********* FLOW TEST **********
    METHOD: ${req.method}
    URL: ${req.url}
    BODY: ${JSON.stringify(req.body)}
  `);
  return next();
});


app.use('/build', (req, res) => res.sendFile((path.resolve(__dirname, '../build/bundle.js'))));

app.use((req, res) => res.sendFile(path.resolve(__dirname, 'index.html')));

// putting query in here since we only have one, will move to controller if we end up with more
app.get('/products', (req, res) => {
  console.log('made it to get request');
  const productQuery = 'SELECT * FROM products';
  db.query(productQuery, (err, resProds) => {
    if (err) {
      console.log(err.stack);
    } else {
      console.log('res.locals in products get req ', res.locals);
      res.locals.products = resProds.rows;
      next();
    }
  });
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  console.log(errorObj.message);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`SERVER LISTENING ON ${PORT}`));

module.exports = app;
