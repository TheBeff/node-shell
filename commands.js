module.exports = {
	
	pwd: function(){
	  	process.stdout.write(process.cwd());
	  	process.stdout.write('\nprompt > ');  
	}, 

	date: function(){
		var date = new Date();
		var dateString = date.toString();
		process.stdout.write(dateString);

  		process.stdout.write('\nprompt > ');   
	}
};