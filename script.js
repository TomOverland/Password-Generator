// Assignment Code
var generateBtn = document.querySelector("#generate");

// Assigning a length to the password from a prompt
var passwordLength = prompt('What would you like the length of the password to be? (Please enter a number between 8 and 120)');

// Assigning character types to password input
var characterTypes = confirm('Would you like to use lowercase letters in your password?  Please select "OK" for yes, and "cancel" for no.')

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); {

  }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);{
    passwordLength;
    //console.log("The password length will be " + passwordLength + " characters long");


}

