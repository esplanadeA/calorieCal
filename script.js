const calorieCounter = document.getElementById('calorie-counter');
console.log(calorieCounter);
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');

let isError = false;

function cleanInputString(str) {
  const regex = /[^+\- ]/g;
  return str.replace(regex, '');
}
function isInvalidInput(str) {
  const regex = /\d+e\d+/i;
  const result = str.match(regex);
  return result;
}
