// Define a function called oldestPerson that takes an object with names as keys and
// ages as values (e.g., {'Chuck': 22, 'Brian': 46}), and then returns the name of the oldest living person.

// Define a function called longestWord that takes a string and returns the longest word in the string.
// Refactor the longestWord function so that it ignores punctuation.

// Define a function called factorial that takes a random number as an argument and then returns the factorial of that given number.
// Bonus: Write a function called palindrome that takes a string as an argument and returns the string in
//reversed order. Return true if the string is the same as the reversed string, otherwise return false.

var oldestPerson = function() {
  var object = ({'Chuck' : 22}, {'Brian' : 46});
  for (var i = 0; i < object.length; i++) {
      if (22<46) {
        return 'Brian';
      }
      else {
        return 'Chuck';
      }
    }
};

//for keys in object_name (loop)




var longestWord = function(string) {
  var array1 = string.split(" ")
    var longestArray = function(){
      for (var i = 0; i < array1.length; i++) {
        if (array1[i] < array1[i+1]) {
          return array1[i+1];
        }
          else {
            return array1[i];
        
      }

      }
      return longestArray
    }
  };

    return array1
    }
var string1 = ("Hello my name is Zoe.")

  console.log(array1);
