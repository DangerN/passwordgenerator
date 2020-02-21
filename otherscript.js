// Pseudo Code
// Click generate password button and see prompts for password criteria.
// First ask for password length between 8-128 characters
// Validate user selection
// Then ask if they want lowercase letters and validate user selection.
// Then ask if they want uppercase letters and validate user selection.
// Then ask if they want numbers and validate user selection.
// Then ask if they want special characters and validate user selection.
// Once user had made all their selections, a password generates either in an alert or written on the page using all the criteria the user selected.

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Prompts for password criteria



// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Generating password
function generatePassword() {
  var length = prompt("Choose your password length. It must be least 8 characters and no more than 128 characters");
  var lowerCase = confirm("Do you want lowercase letters?");
  var upperCase = confirm("Do you want uppercase letters?");
  var numbers = confirm("Do you want Numbers?");
  var special = confirm("Do you want special characters?");

  // Password length based on user prompt input
if (length >=8 && length <=128) {
  var lengthValue = parseInt(lengthCount);
}
else {
  alert("Invalid value. Please try again.")
}
// Upper/Lower case values based on user confirm input
if (lowerCase === true) {
  lowerCaseValue = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  }
  else {
  lowerCaseValue = void(0);
  }
// Upper/Lower case values based on user confirm input
if (upperCase === true) {
upperCaseValue = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
}
else {
upperCaseValue = void(0);
}
// Numbers values based on user confirm input
if (numbers === true) {
numbersValue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
}
else {
numbersValue = void(0);
}
// Special Characters values based on user confirm input
if (special === true) {
specialValue = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ":", ";", "'", "<", ">", "?", "/", "`", "~"];

}

// Establish an array of user input arrays
var collectiveValue = {
  upperCaseValue,
  lowerCaseValue,
  numbersValue,
  specialValue
}

// Concatenating the digits in charCount to have a string length of charCountValue for generator function to know when to end
var str1 = "1";
var charCountValue_toLength = "";
for (j=0; j < charCountValue; j++) {
  charCountValue_toLength = charCountValue_toLength.concat(str1);
}

// Putting password together by randomizing which array is picked, and then randomizing the selection from each array until length is reached
for (i = 0; i < charCountValue; i++) {
  var completedPassword = "";
  checkPasswordLength:
  while (completedPassword.length <= charCountValue_toLength.length) {
    shuffle(collectiveValues);
      var randomizeUpperCaseValue = upperCaseValue[Math.floor(Math.random() * upperCaseValue.length)];

        var completedPassword = completedPassword.concat(randomizeUpperCaseValue);

      var randomizeNumbers = numbersValue[Math.floor(Math.random() * numbersValue.length)];

        var completedPassword = completedPassword.concat(randomizeNumbers);

      var randomizeSpecialCharacters = specialCharactersValue[Math.floor(Math.random() * specialCharactersValue.length)];

        var completedPassword = completedPassword.concat(randomizeSpecialCharacters);
      if (completedPassword.length !== charCountValue_toLength.length) {
        continue checkPasswordLength;
      }
  }
  // used to log the character length in relation to what it should be based off of what the user entered
  function getCharacterLength (str) {
    return [...str].length;

  }
  return completedPassword;
}
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);