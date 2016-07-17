var commands  = require('./commands');
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line

process.stdin.on('data', function (data) {
  var userCommand = data.toString().trim();
  commands[userCommand]();
});