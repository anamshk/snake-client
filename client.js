const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("connected!");
    conn.write("Name: snk");
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 50);
    // setTimeout(() => {
    //   conn.write("Move: right");
    // }, 50);
    // conn.write('/exit');
  });

  return conn;
};

module.exports = {
  connect,
};