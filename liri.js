var tweetKeys = require("./keys.js");
var tweet = require("twitter");
var spot = require("node-spotify-api");

var input = process.argv.slice(2);

var client = new tweet({
  consumer_key: tweetKeys.twitterKeys.consumer_key,
  consumer_secret: tweetKeys.twitterKeys.consumer_secret,
  access_token_key: tweetKeys.twitterKeys.access_token_key,
  access_token_secret: tweetKeys.twitterKeys.access_token_secret
});

//console.log(tweetKeys.twitterKeys.consumer_key);

function giveCmd(cmd){
	 switch (cmd){
		case `my-tweets`:
			console.log("we in");
			client.get('favorites/list', function(error, tweets, response) {
				  if(error) throw error;
				  console.log(tweets);  // The favorites.
				  console.log(response);  // Raw response object.
				});

			break;
		case `spotify-this-song`:
			var song = input[1];
			if (song === null){
				song = "The Sign";
			}

			break;
		case `movie-this`:
			fs.readFile('bank.txt', 'utf8', (err, data) => {
			  if (err){
			  	console.log("error!")
			  }  
			  	console.log(data); 
			});
			break;
		case `do-what-it-says`:
			fs.readFile('random.txt', 'utf8', (err, data) => {
			  if (err){
			  	console.log("error!")
			  }  
			  	giveCmd(data); 
			});
			break;
	}
}

giveCmd(input[0]);