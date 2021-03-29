const cheerio = require('cheerio')
const request = require('request')
const jsonfile = require('jsonfile')
const sdk = require("matrix-bot-sdk");

const configfile = 'config/config.json'
var config = jsonfile.readFileSync(configfile)

const MatrixClient = sdk.MatrixClient;
const SimpleFsStorageProvider = sdk.SimpleFsStorageProvider;
const AutojoinRoomsMixin = sdk.AutojoinRoomsMixin;

const client = new MatrixClient(config.homeServerUrl, config.accessToken)//, new SimpleFsStorageProvider(config.storage));

AutojoinRoomsMixin.setupOnClient(client);

client.on("room.message", (roomId, event) => {
  if (! event["content"]) return;
  const sender = event["sender"];
  const body = event["content"]["body"];
  const type = event["content"]["msgtype"];
  const info = event["content"]["info"]
  const url = event["content"]["url"]
  if(sender == config.ownid) return;
  if(type == "m.text") {
    link_matches = body.match(/https?:\/\/[^\ ]*[^\ ]*/g)
    if( link_matches && link_matches.length > 0) {
      msg = link_matches[0]
      request(msg, function(err, _res, body) {
        if (err) return console.error(err);
        title = ""
        let $ = cheerio.load(body);
        title = $('title').text();
        if(title != "") {
          msg = `${msg} - ${title}`
        }
        client.sendMessage(roomId, {
          "msgtype": "m.text",
          "body": msg,
        });
      })
    }
  }
});



client.start().then(() => console.log("LOG: Client started!"));
