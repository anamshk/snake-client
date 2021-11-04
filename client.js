const net = require("net");
const { IP, PORT } = require("./const");

const connect = function(connec) {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("connected!");
    conn.write('Name: ANM');
  });

  return conn;
};

module.exports = {
  connect,
};