var RTM = require("satori-rtm-sdk");

var endpoint = "wss://x1kijuwn.api.satori.com";
var appKey = "cD78C2EFdadc28A5ab4bADEaedf2c35e";
var channel = "full-weather";

var client = new RTM(endpoint, appKey);

client.on('enter-connected', function () {
  console.log('Connected to Satori RTM!');
});

var subscription = client.subscribe(channel, RTM.SubscriptionMode.SIMPLE);

subscription.on('rtm/subscription/data', function (pdu) {
  pdu.body.messages.forEach(function (msg) {
    console.log('Got message:', msg);
  });
});

client.start();