 



const timer = function(userInput) {
  userInput =  process.argv.slice(2);
  //console.log(userInput)
  if (userInput < 1) { // couldn't figure out how to limit by string and NaN
    return "nope";
  
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

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN 
  
// I feel like I'm searching for the wrong thing

