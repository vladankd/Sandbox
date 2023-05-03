const mainPrompt = document.getElementById("main_prompt_field");
const outputField = document.querySelector(".output_field");

// mainPrompt.addEventListener("change", () => {
//   let comment = document.createElement("p");
//   comment.innerHTML = mainPrompt.value;
//   outputField.appendChild(comment);
//   mainPrompt.value = "";
// });

mainPrompt.addEventListener("change", () => {
  let counter = countDuplicates(mainPrompt.value);
  let p = document.createElement("p");
  p.innerHTML = `${mainPrompt.value} has ${counter} repeating letters.`;
  outputField.appendChild(p);
});

// function openForm() {
//   var formWindow = window.open("", "formWindow", "width=400,height=400");
//   var formHTML =
//     "<form><label>Name:</label><input type='text' name='name'><br><label>Favorite color:</label><select name='color'><option value='red'>Red</option><option value='blue'>Blue</option><option value='green'>Green</option></select><br><label>Hobbies:</label><br><input type='checkbox' name='hobbies' value='reading'>Reading<br><input type='checkbox' name='hobbies' value='sports'>Sports<br><input type='checkbox' name='hobbies' value='music'>Music</form>";
//   formWindow.document.write(formHTML);
// }

// =============================================
// CodeWars - Count the number of Duplicates
// -----------
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// =============================================

// function countDuplicates(testString) {
//   let sanitizedString = testString.toLowerCase().split("");
//   let doublesArr = [];
//   let counter = 0;

//   for (let i = 0; i < sanitizedString.length; i++) {
//     for (let j = 0; j < sanitizedString.length; j++) {
//       if (
//         sanitizedString[i] === sanitizedString[j] &&
//         i !== j &&
//         !doublesArr.includes(sanitizedString[j])
//       ) {
//         doublesArr.push(sanitizedString[i]);
//         counter++;
//       } else continue;
//     }
//   }
//   return counter;
// }
// // function call

// console.log(countDuplicates("Indivisibilities"));
// console.log(countDuplicates("indivisibility"));
// console.log(countDuplicates("aA11"));
// console.log(countDuplicates("abcde"));

// =============================================
// CodeWars - Find the odd int
// -----------
// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.
// =============================================

// let testArray = [0, 1, 0, 1, 0];

// function findOdd(A) {
//   let arr = A;
//   let counter = 1;
//   let oddInt;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] === arr[j] && i != j) {
//         counter++;
//       }
//     }
//     if (counter % 2 != 0) {
//       return (oddInt = arr[i]);
//     } else {
//       counter = 1;
//     }
//   }
//   return oddInt;
// }

// // // function call

// console.log(findOdd(testArray));
// console.log(findOdd([1, 1, 2]));
// console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));

// =============================================
// CodeWars - Is your period late?
// -----------
// In this kata, we will make a function to test whether a period is late.
// Our function will take three parameters:
// last - The Date object with the date of the last period
// today - The Date object with the date of the check
// cycleLength - Integer representing the length of the cycle in days
// Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.
// =============================================

function periodIsLate(last, today, cycleLength) {
  let lastPeriod = last;
  let currentDate = today;
  let period = cycleLength;
  console.log(lastPeriod);
  console.log(currentDate);
  console.log(period);
  return true;
}

// Function call

console.log(
  periodIsLate(new Date(Date.now() - 15), new Date("1981-07-10"), 24)
);
