'use strict';

const express = require('express');

const app = express();


module.exports = {    //imported************************
  server: app,
  start: (port) => {
    if (!port) { throw new Error('Missing Port'); }
    app.listen(port, () => {
      console.log(`Server Up on ${port}`);
    });
  },
};
