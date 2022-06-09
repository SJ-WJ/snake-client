// setup interface to handle user input from stdin
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function() {
    // your code here
    stdin.on('data', (key) => {
      if (key === '\u0003') { // \u0003 maps to ctrl+c input, terminate the game
        process.exit();
      }
    });
  };
  
  stdin.on("data", handleUserInput); //At this point were using it => In respone to "ReferenceError: Cannot access 'handleUserInput' before initialization"
  return stdin;
};

module.exports = setupInput;