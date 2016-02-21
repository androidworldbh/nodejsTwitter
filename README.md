# nodejsTwitter
A Node.JS Twitter Client That Extracts tweets from twitter directly and save them in a folder sorted by username

-----------


### Special thanks

- [ttezel](https://github.com/ttezel/twit)

[![Paypal](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=Z85ZKD48KWYU6#m)]
  
  ### initialize project Feb 21st, 2016

"[*] Ability to search by hashtag and save tweets".

#Installing

```

npm install twit


```

##Usage:

```javascript
var Twit = require('twit')

var client = new Twit({
  consumer_key:         '...',
  consumer_secret:      '...',
  access_token:         '...',
  access_token_secret:  '...',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

```

-------

#What do I have access to?

Anything in the Twitter API:

* REST API Endpoints:       https://dev.twitter.com/rest/public
* Public stream endpoints:  https://dev.twitter.com/streaming/public
* User stream endpoints:    https://dev.twitter.com/streaming/userstreams
* Site stream endpoints:    https://dev.twitter.com/streaming/sitestreams

-------
