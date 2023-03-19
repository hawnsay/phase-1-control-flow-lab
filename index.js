function scuberGreetingForFeet(distance, message){
  if (distance <= 400) {
    message = "This one is on me!";
  } if (distance < 2000 && distance > 400) {
    message = "That will be twenty bucks.";
  }
  if (distance > 2000) {
    message = "I will gladly take your thirty bucks.";
  }
  if (distance > 2500) {
    message = "No can do.";
  }
  return message;
}


function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip){
  let message;
    switch(tip) {
     case "generous":
       message = "Thank you so much.";
       break;
     case "not as generous":
       message = "Thank you."
       break;
     default:
       message = "Bye."
       break;
    }
     return message;
   }
   