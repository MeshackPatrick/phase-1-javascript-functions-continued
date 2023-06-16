// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${action}!`;
  }
  
  function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${task}.`;
  }
  
  function wrapAdjective(message = "*") {
    return function (adjective = "special") {
      return `You are ${message}${adjective}${message}!`;
    }
  }
  
  const encouragingPromptFunction = wrapAdjective("%");
  console.log(encouragingPromptFunction("a dedicated programmer"));
  console.log(encouragingPromptFunction());
  