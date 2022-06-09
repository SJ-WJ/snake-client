const {IP, PORT} = require("./constants");

const net = require("net");
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT // PORT number here,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => { // code that does something when the connection is first established
    console.log("Champ is here!"); // Once connection is eastablished send message
    conn.write("Name: SWJ"); // Print out name to server
  });
  
  conn.on("data", (data) => { // Return the message from server when you get kicked out for idling
    console.log("Server says: ", data);
  });

  return conn;
};

module.exports = connect;