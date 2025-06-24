let ages = 18;

if (ages >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}


let num = 10;

if (num > 0) {
  console.log("Number is positive");
}


let ag = 20;
let result = ag >= 18 ? "Eligible" : "Not Eligible";
console.log(result);



let day = "Tuesday";

switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Tuesday":
    console.log("Second day of the week");
    break;
  default:
    console.log("Other day");
}


let marks = 75;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 60) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}



let xa =  10;
let esult = x || 5;

console.log(esult);


for (let i = 5; i >= 1; i--) {
  console.log(i);
}