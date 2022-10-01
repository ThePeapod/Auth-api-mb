'use strict';


// Requirements
const express = require('express');
const cors = require('cors');
const logger = require('./auth/middleware/logger');
const app = express();
const morgan = require('morgan');


// Uses
app.use(cors());
app.use(morgan('dev'));
app.use(authRoutes);
app.use(logger);
app.use('*', notFound);
app.use(errorHandler);


// Routes
const errorHandler = require('./error-handlers/500.js');
const notFound = require('./error-handlers/404.js');
const authRoutes = require('./auth/route/routes.js');



module.exports = {    //imported************************
  server: app,
  start: (port) => {
    if (!port) { throw new Error('Missing Port'); }
    app.listen(port, () => {
      console.log(`Server Up on ${port}`);
    });
  },
};
