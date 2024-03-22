const calorieCounter = document.getElementById('calorie-counter');
console.log(calorieCounter);
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');

let isError = false;

function cleanInputString(str) {
  const regex = /[^+\- ]/g; // Matches any character that is not '+', '-', or ' '
  return str.replace(regex, '');
}
