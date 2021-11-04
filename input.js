let connection;
const stdin = process.stdin;
//emitter.setMaxListeners();


const setupInput = (conn) => {
  connection = conn;
  const handleUserInput = function() {
    stdin.on('data', (key) => {
      //process.stdout.write('.');
      if (key === '\u0003') {
        process.exit();
      }
      if (key === '\u001b[A') {
        //console.log("Move: up");
        connection.write("Move: up");
      }
      if (key === '\u001b[B') {
        //console.log("Move: down");
        connection.write("Move: down");
      }
      if (key === '\u001b[C') {
        //console.log("Move: right");
        connection.write("Move: right");
      }
      if (key === '\u001b[D') {
        //console.log("Move: left");
        connection.write("Move: left");
      }

      if (key === "m") {
        connection.write("Say: what's up!");
      }
    });
  };
  stdin.on("data", handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  return stdin;
};


module.exports = {
  setupInput,
};