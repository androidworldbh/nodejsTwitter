var Twit = require('twit');
var prompt = require('prompt');
var fs = require("fs");

var client = new Twit({
  consumer_key:         '...',
  consumer_secret:      '...',
  access_token:         '...',
  access_token_secret:  '...',
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
