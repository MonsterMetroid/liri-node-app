var tweetKeys = require("./keys.js");
var tweet = require("twitter");
var spot = require("node-spotify-api");

var input = process.argv.slice(2);

console.log(tweetKeys.consumer_key);

// function giveCmd(cmd){
// 	 switch (cmd[0]){
// 		case `my-tweets`:
// 			fs.readFile('bank.txt', 'utf8', (err, data) => {
// 			  if (err){
// 			  	console.log("error!")
// 			  }  
// 			  	console.log(data); 
// 			});
// 			break;
// 		case `spotify-this-song`:
// 			var song = input[1];
// 			if (song === null){
// 				song = "The Sign";
// 			}

// 			break;
// 		case `movie-this`:
// 			fs.readFile('bank.txt', 'utf8', (err, data) => {
// 			  if (err){
// 			  	console.log("error!")
// 			  }  
// 			  	console.log(data); 
// 			});
// 			break;
// 		case `do-what-it-says`:
// 			fs.readFile('random.txt', 'utf8', (err, data) => {
// 			  if (err){
// 			  	console.log("error!")
// 			  }  
// 			  	giveCmd(data); 
// 			});
// 			break;
// 	}
// }

// giveCmd(input[0]);