var Twit = require('twit');
var prompt = require('prompt');
// var jsonfile = require('jsonfile');
// var util = require('util');
// var shell = require('shelljs');
var fs = require("fs");
// require('shelljs/global');
// require('shelljs/make');

var client = new Twit({
  consumer_key:         'lZIlBq7dI9khGOzK9Y8A3vmam',
  consumer_secret:      'bAqeoGbAcWmeo6BNqTUMTPVkEX3ZXj96JfOewCy1Uu0ELgybkm',
  access_token:         '2296359555-oxEd9Ckv0XHKV7PdesdotdDfgm3VS0mBUIFAVtO',
  access_token_secret:  'dpAmCHBjZbFdGUpRXV0lz2GeLjNdDfpfq36v9CMS0942j',
  timeout_ms:           60*1000
});

prompt.start();

console.log('Choose Function [NUMBER]:'+'\r\n'
+'1- Search And Save In TXT File');

prompt.get(['funNumber'], function (err, result) {
  if (err) { return onErr(err); }
  //console.log('  Function Numner: ' + result.funNumber);
  var fnumber = result.funNumber;

  switch(fnumber) {
    case "1":



      prompt.get(['hashtagKey'], function (err, result) {
        if (err) { return onErr(err); }
        var sk = result.hashtagKey;

        var dir = 'tweets';

        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }

        var stream = client.stream('statuses/filter', { track: sk });

        stream.on('tweet', function (data) {
          console.log("via: "+data.user.screen_name+"/"+"Tweet: "+data.text);
          var dataTosave = "{"+"\r"+
          data.text+","+"\r\n"+
          "Time: "+data.created_at+","+"\r\n"+
          "Source: "+data.source+","+
          "\r"+"}";
          fs.writeFile('tweets/'+data.user.screen_name+'.txt',dataTosave,function (err) {
            if (err) throw err;
            //  console.log(data);
            //  console.log(data.user.screen_name+': '+'saved!');
          });

        });


        function onErr(err) {
          console.log(err);
          return 1;
        }

      });
      break;
    default:
      text = "invalid function number ...";
      break;

}

  function onErr(err) {
    console.log(err);
    return 1;
  }

});
