const net = require("net");
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243",// IP address here,
    port: 50541 // PORT number here,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => { // code that does something when the connection is first established
    console.log("Champ is here!"); // Once connection is eastablished send message
    conn.write("Name: SWJ"); // Print out name to server
    conn.write("Move: up"); // Requesting server to move up, then experimenting with moving in different directions
    setTimeout(() => {
      conn.write("Move: up");
    }, 500);
    setInterval(() => {
      conn.write("Move: left");
    }, 500);
  });
  
  conn.on("data", (data) => { // Return the message from server when you get kicked out for idling
    console.log("Server says: ", data);
  });

  return conn;
};

module.exports = connect;