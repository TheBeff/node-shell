process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var input = data.toString().trim();
  if(input === "pwd"){
  	process.stdout.write(process.cwd());
  }
  if(input === "date"){
  	var date = new Date();
  	var dateString = date.toString();
  	process.stdout.write(dateString);
  }
  process.stdout.write('\nprompt > ');   

});