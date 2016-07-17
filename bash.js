var commands  = require('./commands');
var done = function(output){
	process.stdout.write(output);
	process.stdout.write('\nprompt > ');
};

process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
  var cmdArr = data.toString().trim().split(" ");
  var userCommand = cmdArr.shift();
  var argString = cmdArr.join(" ");
  commands[userCommand](argString, done);
});