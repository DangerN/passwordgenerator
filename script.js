// Assignment Code
var generateBtn = document.querySelector("#generate");

// Prompts for password criteria
var length = prompt("Choose your password length. It must be least 8 characters and no more than 128 characters");
var lowerCase = prompt("Do you want lowercase characters?");
var upperCase = prompt("Do you want uppercase characters?");
var numeber = prompt("Do you want Numbers?");
var special = prompt("Do you want special characters?");

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
