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
  var lengthValue = parseInt(length);
}
else {
  alert("Invalid value. Please try again.")
}
// Upper/Lower case values based on user confirm input
if (lowerCase === true) {
  lowerCaseValue = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  }
  else {
    alert("No lowercase letters!");
  }

// Upper/Lower case values based on user confirm input
if (upperCase === true) {
upperCaseValue = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
}
else {
  alert("No uppercase letter!");
}
// Numbers values based on user confirm input
if (numbers === true) {
numbersValue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
}
else {
  alert("No numbers!");
}
// Special Characters values based on user confirm input
if (special === true) {
specialValue = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ":", ";", "'", "<", ">", "?", "/", "`", "~"];
}
else{
  alert("No special characters!");
}


}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
