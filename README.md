# nodejsTwitter
A Node.JS Twitter Client That Extracts tweets from twitter directly and save them in a folder sorted by username

-----------


### Special thanks

- [ttezel](https://github.com/ttezel/twit)
- [flatiron](https://github.com/flatiron/prompt)

[![Paypal](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=Z85ZKD48KWYU6#m)]
  
# initialize project Feb 21st, 2016

"[*] Ability to search by hashtag and save tweets".

#Installing
NOTE: If you are using Ubuntu Precise or Debian Wheezy, you might want to read about running Node.js >= 4.x on older distros.

```
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Alternatively, for Node.js v5:
```
curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Optional: install build tools

To compile and install native addons from npm you may also need to install build tools:
```
sudo apt-get install -y build-essential
```

##Installing npm

Debian (Ubuntu/ Mint)
```
sudo apt-get install npm
```

twitter api via ttezel
```
npm install twit
```
A beautiful command-line prompt for node.js
```
npm install prompt
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

#To start nodejs script in linux use
```javascript
node index.js
```

###saving structure
```
{ @username: xxxxxxxxx,
Time: Sun Feb 21 22:36:43 +0000 2016,
Source: xxxxx }
```


-------

#What do I have access to?

Anything in the Twitter API:

* REST API Endpoints:       https://dev.twitter.com/rest/public
* Public stream endpoints:  https://dev.twitter.com/streaming/public
* User stream endpoints:    https://dev.twitter.com/streaming/userstreams
* Site stream endpoints:    https://dev.twitter.com/streaming/sitestreams

-------
