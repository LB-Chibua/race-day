// This is a program that will register 
// runners for the race and give them instructions on race day.
// There are adult runners (over 18 years of age) and youth runners 
// (under 18 years of age). They can register early or late. 
// Runners are assigned a race number and start time based on their age and registration.

// Race number:

// Early adults receive a race number at or above 1000.
// All others receive a number below 1000.

// Start time:
// Adult registrants run at 9:30 am or 11:00 am.
// Early adults run at 9:30 am.
// Late adults run at 11:00 am.
// Youth registrants run at 12:30 pm (regardless of registration).

let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let runnerAge = 18;

//checks whether the runner is an adult AND registered early
if (runnerAge > 18 && registeredEarly) {
    raceNumber = raceNumber + 1000
  };

  // check age and registration time to determine race time
if (runnerAge > 18 && registeredEarly) {
    console.log("You will race at 9:30 am, " + "your race number is " + raceNumber)
  } else if (runnerAge > 18 && !registeredEarly) {
    console.log("You will race at 11:00 am, " + "your race number is " + raceNumber )
  } else if (runnerAge < 18) {
    console.log("You will race at 12:30 pm, " + "your race number is " + raceNumber)
  } else {
    console.log("See registration desk")
  };