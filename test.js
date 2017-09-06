var filesYo = require('fs');
var https = require('https');

filesYo.writeFile(__dirname + "/index.html", "<h1>HTML Rocks!</h1>");

var dogUrl = "https://cdn.static-economist.com/sites/default/files/imagecache/640-width/20170909_USP502_0.jpg";
var dogFile = filesYo.createWriteStream(__dirname+"/node-dog.jpg");
var request = https.get(dogUrl, function(response){
	response.pipe(dogFile);
})
