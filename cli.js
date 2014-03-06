#!/usr/bin/env node

var careware = require('./');

process.stdin.on('data', function(c) {
  c.toString().split('\n').map(function(c) {
    careware(c, function(err, val){
      //swallow those nasty errors
      process.stdout.write((val || '')+ '\n');
    });
  });
});
