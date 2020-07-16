// Start Working Code
// User Input Variables
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

// Start password variable values
//Special Characters
character = [];
//numeric values
number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//alphabetical characters
alphaLower = []
alphaUpper = []

//choices declared outside of below if statement so I can use .conc
var choices;

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
   
};

// // Assigning a length to the password from a prompt
// var passwordLength = prompt('What would you like the length of the password to be? (Please enter a number between 8 and 120)');

// Consider deleting... // Assigning character types to password input
// var charTypesLowercase = confirm('Would you like to use lowercase letters in your password?  Please select "OK" for yes, or "Cancel" for no.');
// var charTypesUppercase = confirm('Would you like to use uppercase letters in your password?  Please select "OK" for yes, or "Cancel" for no.');
// var charTypesNumeric = confirm('Would you like to use numbers in your password?  Please select "OK" for yes, or "Cancel" for no.');
// var charTypesSpecial = confirm('Would you like to use special characters in your password?  Please select "OK" for yes, or "Cancel" for no.');



// Password length prompt
passwordLength;

// Password length validation
 if (passwordLength < 8) {   
        //console.log('Your password length is too small');
        alert('Your password length is too small')
    } else if (passwordLength > 128) {
        //console.log('Your password length is too long');
        alert('Your password length is too long')
    } else {
        alert('Your password length will be ' + passwordLength + ' characters long.');
        //console.log("Your password length will be " + passwordLength + " characters long")
    };       

// Lowercase letters prompt
charTypesLowercase;
if (charTypesLowercase) {
    //console.log("You would like to use lowercase letters");
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
} else {
    //console.log("You do not want to use lowercase letters");
    var lowercase = "";
};

// Uppercase letters prompt
charTypesUppercase;
if (charTypesUppercase) {
    //console.log("You would like to use uppercase letters");
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
} else {
    //console.log("You do not want to use uppercase letters");
    var uppercase = "";
};

// Numeric prompt
charTypesNumeric;
if (charTypesNumeric) {
    //console.log("You would like to use numbers");
    var numeric = "1234567890";
} else {
    //console.log("You do not want to use numbers");
    var numeric = "";
};

// Special Characters prompt
charTypesSpecial;
if (charTypesSpecial) {
    //console.log("You would like to use special characters")
    var special = "!@#$%^&*()_-=+,.?/<>"
} else {
    //console.log("You do not want to use special characters")
    var special = "";
};

// Validating that one of the input methods was chosen
if (charTypesLowercase === false && charTypesUppercase === false && charTypesNumeric === false && charTypesSpecial === false) {
    alert("You must select one of the options.");
};

// Adding the selected inputs to a single variable and console logging the options
var chars = lowercase.concat(uppercase, numeric, special);
//console.log("Your password will consist of the following characters: " + chars);

// ---PASSWORD---
// Write password to the #password input
function writePassword() {
    var passwordText = document.querySelector("#password");
    var password = generatePassword(); {
    passwordText.value = password;
    }
};

function generatePassword() {
    //Asks for User Input
    enter = parseInt(prompt("How many characters long would you like your password to be?  Please enter an amount between 8 and 128."));
    //If statement for user validation, first statement is if the field is left blank
    if (!enter) {
        alert("You must enter a value");
    } else if (enter < 8 || enter > 128) {
        //second user validation is for if the value is less than 8 or greater than 128
        enter = parseInt(prompt("You must choose a number between 8 and 128."));
    } else {
        confirmNumber = confirm("Will this contain numbers?");
        confirmCharacter = confirm("Will this contain special characters?")
        confirmUppercase = confirm("Will this contain uppercase letters?")
        confirmLowercase = confirm("Will this contain lowercase letters?")
    };

    //Verification to prevent all four options above being false
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must select one of the options.  Please try again.");
    }
    // if statement assigns choices to a prompt verification, the four else if statements are for positive responses
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
        choices = character.concat(number, alphaLower, alphaUpper)
    }

    var retVal = "";
    for (i = 0; i < passwordLength; i++) {
        var c = Math.floor(Math.random() * chars.length + 1);
        retVal += chars.charAt(c);
    }
    return retVal;
};

