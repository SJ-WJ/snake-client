let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
};


const handleUserInput = function(key) {
  // your code here
  if (key === '\u0003') { // \u0003 maps to ctrl+c input, terminate the game
    process.exit();
  }
  if (key === 'w') { // "W, moving up"
    connection.write("Move: up");
  }
  if (key === 'a') { // "A, moving left"
    connection.write("Move: left");
  }
  if (key === 's') { // "S, moving down"
    connection.write("Move: down");
  }
  if (key === 'd') { // "D, moving right"
    connection.write("Move: right");
  }

  //Say Message
  if (key === 'o') {
    connection.write("Say: The Champ is Here!");
  }
};

module.exports = setupInput;