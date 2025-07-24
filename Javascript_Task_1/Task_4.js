// Switch Statement for Days

function getDayName(dayNumber) {
  let day;

  switch (dayNumber) {
    case 1:
      day = "Sunday";
      break;
    case 2:
      day = "Monday";
      break;
    case 3:
      day = "Tuesday";
      break;
    case 4:
      day = "Wednesday";
      break;
    case 5:
      day = "Thursday";
      break;
    case 6:
      day = "Friday";
      break;
    case 7:
      day = "Saturday";
      break;
    default:
      day = "Invalid day number";
  }

  return day;
}

// ============================
// Test Examples
// ============================
console.log("Day 1 : "+getDayName(1));  // Sunday
console.log("Day 5 : "+getDayName(5));  // Thursday
console.log("Day 7 : "+getDayName(7));  // Saturday
console.log("Day 0 : "+getDayName(0));  // Invalid
