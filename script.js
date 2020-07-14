// Assignment Code
var generateBtn = document.querySelector("#generate");

// Assigning a length to the password from a prompt
var passwordLength = prompt('What would you like the length of the password to be? (Please enter a number between 8 and 120)');

// Assigning character types to password input
var charTypesLowercase = confirm('Would you like to use lowercase letters in your password?  Please select "OK" for yes, or "Cancel" for no.');
var charTypesUppercase = confirm('Would you like to use uppercase letters in your password?  Please select "OK" for yes, or "Cancel" for no.');
var charTypesNumeric = confirm('Would you like to use numbers in your password?  Please select "OK" for yes, or "Cancel" for no.');
var charTypesSpecial = confirm('Would you like to use special characters in your password?  Please select "OK" for yes, or "Cancel" for no.')

// ---PROMPTS---
// Password Length
passwordLength;
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

//Lowercase letters
charTypesLowercase;
if (charTypesLowercase) {
    console.log("You would like to use lowercase letters")
} else {
    console.log("You do not want to use lowercase letters")
};

//Uppercase letters
charTypesUppercase;
if (charTypesUppercase) {
    console.log("You would like to use uppercase letters")
} else {
    console.log("You do not want to use uppercase letters")
};

//Numeric
charTypesNumeric;
if (charTypesUppercase) {
    console.log("You would like to use numbers")
} else {
    console.log("You do not want to use numbers")
};

//Special Characters
charTypesSpecial;
if (charTypesUppercase) {
    console.log("You would like to use special characters")
} else {
    console.log("You do not want to use special characters")
};


// ---PASSWORD---
// Write password to the #password input
function writePassword() {
    var password = generatePassword(); {

    }
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
    //Making sure one  of the inputs was selected
    if (charTypesLowercase === false && charTypesUppercase === false && charTypesNumeric === false && charTypesSpecial === false) {
        alert("You must select one of the options.");
        charTypesLowercase;
        charTypesUppercase;
        charTypesNumeric;
        charTypesSpecial;
    }

}

