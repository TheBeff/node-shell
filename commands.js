var fs = require('fs');
var request = require('request');

module.exports = {
	
	pwd: function(file){
	  	process.stdout.write(process.cwd());
	  	process.stdout.write('\nprompt > ');  
	}, 

	date: function(file){
		var date = new Date();
		var dateString = date.toString();
		process.stdout.write(dateString);
  		process.stdout.write('\nprompt > ');   
	},

	ls: function(file){
		fs.readdir('.', function(err, files) {
  			if (err) throw err;
  			files.forEach(function(file) {
    			process.stdout.write(file.toString() + "\n");
  			})
  		process.stdout.write("prompt > ");
		});
	},

	echo: function(file){
		process.stdout.write(file + '\n');
		process.stdout.write("prompt > ");
	},

	cat: function(file){
		fs.readFile(file, function(err, data){
			if (err) throw err;
			process.stdout.write(data + '\n');
			process.stdout.write("prompt > ");
		})
	},

	head: function(file){
		fs.readFile(file, function(err, data){
			if (err) throw err;
			var contentString = 
				data.toString().split("\n").slice(0,5).join('\n');
			process.stdout.write(contentString);
			process.stdout.write("prompt > ");
		})
	},

	tail: function(file){
		fs.readFile(file, function(err, data){
			if (err) throw err;
			var contentString = 
				data.toString().split("\n").slice(-5).join('\n');
			process.stdout.write(contentString + '\n');
			process.stdout.write("prompt > ");
		})
	},

	curl: function(file){
		request(file, function(error, response, body){
			if(error) throw error;
			if(!error && response.statusCode == 200){
				process.stdout.write(body + "\n");
			}
			process.stdout.write("prompt > ");
		})
	}
};