 



const timer = function(userInput) {
  userInput =  process.argv.slice(2);
  //console.log(userInput)
  if (userInput < 1) {
    return "nope";
  } else if ("string") { // is there a better way?
    return "not going to work";
  } else if (NaN) {
    return "try again";
  } else {
    for (let value of userInput)  {

      let timInt = value * 1000;

      //console.log(timInt);
      setTimeout(() => {
        process.stdout.write('\x07');
      }, timInt);
    }
  }
};
console.log(timer());


  
  
  
//|| userInput < 1 || userInput === NaN
  
// let timInt = 0
// process.stdout.write("\n");
// for(let i = 0; i < sentence.length; i++) {
//   setTimeout(() => {
//       process.stdout.write(sentence[i] );
//       }, timInt);
//   timInt += 50
// };

// setTimeout(() => {
//   process.stdout.write("\n")
// }, timInt);