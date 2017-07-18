#!/usr/bin/env node

var fs = require('fs');
var path = require('path');

var option = process.argv[2];
var extension = '.';
if(option) {
  extension += process.argv[3];
}

fs.readdir(process.cwd(), function(err, files) {
  files.forEach(function(file) {
    if(option) {
      if(path.extname(file) === extension) {
        process.stdout.write(file + ' ');
      }
    } else {
      process.stdout.write(file + ' ');
    }
  });
});
