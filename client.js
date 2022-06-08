const net = require("net");
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "",// IP address here,
    port: "" // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => { // code that does something when the connection is first established
    console.log("Champ is here!"); // Once connection is eastablished send message
    
  }); conn.on("data", (data) => { // Return the message from server when you get kicked out for idling
    console.log("Server says: ", data);
  });

  return conn;
};

module.exports = connect;