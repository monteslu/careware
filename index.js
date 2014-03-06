var rainbowify = require('rainbowify');
var sentiment = require('sentiment');

var cares = ['PUPPY', 'LOLLIPOP', 'PONY', 'GUMDROP', 'BUTTERFLY', 'RAINBOW', 'HEART'];

function randomNice(){
  return cares[Math.floor(Math.random() * cares.length)];
}

function escapeRegExp(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}

function replaceAll(find, replace, str) {
  return str.replace(new RegExp(escapeRegExp(find),'i','g'), replace);
}

function careify(str, cb) {
  sentiment(str, function(err, result){
      //console.log(str, result);
      if(result.negative && result.negative.length){
        result.negative.forEach(function(nag){
          str = replaceAll(nag, randomNice(), str);
        });
      }
      cb(err, rainbowify(str));
  });
}

module.exports = careify;
