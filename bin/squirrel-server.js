#!/usr/bin/env node
var path = require('path');

require(path.resolve(__dirname, '../')).listen(require('nconf').get('PORT'), '0.0.0.0', function() {
  console.log('http://0.0.0.0:' + require('nconf').get('PORT'));
});
