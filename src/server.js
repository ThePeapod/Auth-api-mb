'use strict';


// Requirements
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const logger = require('./auth/middleware/logger');

const errorHandler = require('./error-handlers/500.js');
const notFound = require('./error-handlers/404.js');
const authRoutes = require('./auth/route/routes.js');
const router1 = require('./auth/route/router.js');

const app = express();

// Routes

// Uses
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(authRoutes);
app.use('/api/router1', router1);

app.use(logger);


app.use('*', notFound);
app.use(errorHandler);


module.exports = {    //imported************************
  server: app,
  start: (port) => {
    if (!port) { throw new Error('Missing Port'); }
    app.listen(port, () => {
      console.log(`Server Up on ${port}`);
    });
  },
};
