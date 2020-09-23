 



const timer = function(userInput) {
  userInput =  process.argv.slice(2);
  
  //  const testMap = userInput.map((item) => {
  //     return item * 2
  //   });
  //
  // const testPars =
  // console.log (testPars);


  // console.log(testMap);
  //console.log(userInput)
  // change array into int with parsInt and map
  if (userInput < 1 || isNaN(parseInt(userInput))) { // couldn't figure out how to limit by string and NaN
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

