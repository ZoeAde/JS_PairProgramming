//QUESTION 1: OLDEST PERSON
// Define a function called oldestPerson that takes an object with names as keys and
// ages as values (e.g., {'Chuck': 22, 'Brian': 46}), and then returns the name of the oldest living person.
var people = [
    {name: 'Chuck', age: 22},
    {name: 'Brain', age: 46},
  ];
var oldestPerson = function() {
  var oldestAge = 0;
  var oldestName = null;
  for (var i = 0; i < people.length; i++) {
      if (oldestAge < people[i].age) {
        oldestAge = people[i].age;
        oldestName = people[i].name;
      }
  }
  console.log(oldestName);
};
oldestPerson();

//QUESTION 2 - LONGEST WORD
// Define a function called longestWord that takes a string and returns the longest word in the string.
function longestWord(string) {
    var array1 = string.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < array1.length; i++) {
        if (longest < array1[i].length) {
            longest = array1[i].length;
            word = array1[i];
        }
    }
    console.log(word)
    return word;
}
longestWord(string);

//QUESTION 3: REFACTOR
// Refactor the longestWord function so that it ignores punctuation.
function longestWord(string) {
    var string1 = string.replace(/[^\w\s]|_/g, " ");
    var array1 = string1.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < array1.length; i++) {
        if (longest < array1[i].length) {
            longest = array1[i].length;
            word = array1[i];
        }
    }
    console.log(word)
    return word;
}
longestWord(string);


//QUESTION 4: FACTORIAL FUNCTION
// Define a function called factorial that takes a random number as
//an argument and then returns the factorial of that given number.
var randomNum = Math.floor(Math.random() * 100);
function factorial () {
var answer = 1;
for (var i = 1; i <= randomNum; i++) {
  answer *= i;
}
  return answer;
}

//QUESTION 5: BONUS
//Write a function called palindrome that takes a string as an argument and returns the string in
//reversed order. Return true if the string is the same as the reversed string, otherwise return false.
function palindrome (string) {
  var reversed = string.split("").reverse().join("");
  if (string.toLowerCase === reversed.toLowerCase) {
    return true;
  }
  else {
    return false;
  }
};
