#!/usr/bin/env node

var fs = require('fs');

var data = '';
var stream = fs.createReadStream(process.argv[2]);

stream.on('data', function(chunk) {
  data += chunk;
});

stream.on('end', function() {
  process.stdout.write(data);
});
