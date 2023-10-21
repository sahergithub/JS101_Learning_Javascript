// Problem 5: Given the days of the week in short format "Sun", "Mon" ... print in long format "Sunday", "Monday", ...

let x = "Mon"

switch (x)
  {
    case "Mon" : console.log("Monday");
      break;
    case "Tues" :  console.log("Tuesday");
     break;
    case "Wed":  console.log("Wednesday");
     break;
    case "Thurs" :  console.log("Thursday");
      break;
    case "Fri" :  console.log("Friday");
      break;
    case "Satur" : console.log("Saturday");
      break;
    case "Sun" : console.log("Sunday");
      break;
  
     default :
      console.log("Invalid");
  }