const {connect} = require("./client");
// establishes a connection with the game server

// setup interface to handle user input from stdin
const setupInput = function() {
  const stdin = process.stdin;
  const handleUserInput = function() {
    stdin.on('data', (key) => {
      //process.stdout.write('.');
      if (key === '\u0003') {
        process.exit();
      }
    });
  };
  stdin.on("data", handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  return stdin;
};



//console.log(connect);
connect();
setupInput();


