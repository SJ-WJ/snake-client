const connect = require("./client"); //Importing the connect function

console.log("Connecting ...");
connect();

// setup interface to handle user input from stdin
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);
  const handleUserInput = function() {
    // your code here
    stdin.on('data', (key) => {
      if (key === '\u0003') { // \u0003 maps to ctrl+c input, terminate the game
        process.exit();
      }
    });
  };

  return stdin;
};

