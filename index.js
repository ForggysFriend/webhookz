const express = require('express')
const request = require('request')
const bodyParser = require('body-parser')

const hook = 'https://discordapp.com/api/webhooks/416763481199607829/rgtR6u8CXL4fBLEuLpvgCslh2CFBcUHwJCL_vFoOg61lv4x7Yl66eDv2yQXWNiBMAQSq';

let app = express()

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/API/discord', function (req, res) {
  let data = req.body.data
  if (!data) return res.send('You need to send data.');
  request({
  	url: hook,
  	method: "POST",
  	json: data
  }, function(err, xhr, body) {
  	if (!(xhr.statusCode === 204)) return res.send("Discord API returned an error.");
  	return res.send("Successfully posted data to webhook.");
  })
})

app.listen(3000, function () {
	console.log('Server is running.');
})