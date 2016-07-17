var fs = require('fs');
var request = require('request');

module.exports = {
	
	pwd: function(file, done){
	  	var output = process.cwd();
	  	done(output);
	  	// process.stdout.write(process.cwd());
	  	// process.stdout.write('\nprompt > ');  
	}, 

	date: function(file, done){
		var date = new Date();
		var dateString = date.toString();
		done(dateString); 
	},

	ls: function(file, done){
		var output = "";
		fs.readdir('.', function(err, files) {
  			if (err) throw err;
  			files.forEach(function(file) {
    			output += (file.toString() + '\n');
  			})
  		done(output);
		});
	},

	echo: function(file, done){
		done(file);
	},

	cat: function(file, done){
		fs.readFile(file, function(err, data){
			if (err) throw err;
			done(data);
		})
	},

	head: function(file, done){
		fs.readFile(file, function(err, data){
			if (err) throw err;
			var contentString = 
				data.toString().split("\n").slice(0,5).join('\n');
			done(contentString);
		})
	},

	tail: function(file, done){
		fs.readFile(file, function(err, data){
			if (err) throw err;
			var contentString = 
				data.toString().split("\n").slice(-5).join('\n');
			done(contentString);
		})
	},

	curl: function(file, done){
		var output = "";
		request(file, function(error, response, body){
			if(error) throw error;
			if(!error && response.statusCode == 200){
				output += body;
				done(output);
			}
		})
	}
};