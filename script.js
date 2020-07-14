// Assignment Code
var generateBtn = document.querySelector("#generate");

// Assigning a length to the password from a prompt
var passwordLength = prompt('What would you like the length of the password to be? (Please enter a number between 8 and 120)');

// Assigning character types to password input
var charTypesLowercase = confirm('Would you like to use lowercase letters in your password?  Please select "OK" for yes, or "Cancel" for no.');
var charTypesUppercase = confirm('Would you like to use uppercase letters in your password?  Please select "OK" for yes, or "Cancel" for no.');
var charTypesNumeric = confirm('Would you like to use numbers in your password?  Please select "OK" for yes, or "Cancel" for no.');
var charTypesSpecial = confirm('Would you like to use special characters in your password?  Please select "OK" for yes, or "Cancel" for no.');


// ---PROMPTS---
// Password Length
passwordLength;
// Password Validation
 if (passwordLength < 8) {   
        console.log('Your password length is too small');
        alert('Your password length is too small')
    } else if (passwordLength > 128) {
        console.log('Your password length is too long');
        alert('Your password length is too long')
    } else {
        alert('Your password length will be ' + passwordLength + ' characters long.');
        console.log("Your password length will be " + passwordLength + " characters long")
    };       

// Lowercase letters
charTypesLowercase;
if (charTypesLowercase) {
    console.log("You would like to use lowercase letters");
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
} else {
    console.log("You do not want to use lowercase letters");
    var lowercase = "";
};

// Uppercase letters
charTypesUppercase;
if (charTypesUppercase) {
    console.log("You would like to use uppercase letters");
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
} else {
    console.log("You do not want to use uppercase letters");
    var uppercase = "";
};

// Numeric
charTypesNumeric;
if (charTypesNumeric) {
    console.log("You would like to use numbers");
    var numeric = "1234567890";
} else {
    console.log("You do not want to use numbers");
    var numeric = "";
};

// Special Characters
charTypesSpecial;
if (charTypesSpecial) {
    console.log("You would like to use special characters")
    var special = "!@#$%^&*()_-=+,.?/<>"
} else {
    console.log("You do not want to use special characters")
    var special = "";
};

// Validating that one of the input methods was chosen
if (charTypesLowercase === false && charTypesUppercase === false && charTypesNumeric === false && charTypesSpecial === false) {
    alert("You must select one of the options.");
};

//console.log concat() to test
var chars = lowercase.concat(uppercase, numeric, special);
console.log("Your password will consist of the following characters: " + chars);

// ---PASSWORD---
// Write password to the #password input
function writePassword() {
    var password = generatePassword(); {

    }
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
    

};

