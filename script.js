// Start working code
// User input variables: 
var passwordLength;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
// Start Password variable values: 
// Special characters 
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Choices declared outside the if statement so they can be concatenated upon condition
var choices;



var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    passwordToString = generatePassword();
    document.getElementById("password").placeholder = passwordToString;
});

// Start function to generate password
function generatePassword() {
    // Asks for user input
    passwordLength = parseInt(prompt("How many characters would you like your password to be? Enter a number between 8 and 128."));
    // First if statement for user validation 
    if (!passwordLength) {
        alert("This needs a value");
    } else if (passwordLength < 8 || passwordLength > 128) {
        // Validates user input
        // Start user input prompts
        passwordLength = parseInt(prompt("You must choose a number between 8 and 128.  Please try again."));

    } else {
        // Continues once user input is validated
        confirmNumber = confirm("Would you like your password to contain numbers?  Press OK for YES, and Cancel for NO");
        confirmCharacter = confirm("Would you like your password to contain special characters?  Press OK for YES, and Cancel for NO");
        confirmUppercase = confirm("Would you like your password to contain uppercase letters?  Press OK for YES, and Cancel for NO");
        confirmLowercase = confirm("Would you like your password to contain lowercase letters?  Press OK for YES, and Cancel for NO");
    };

    // Else if for 4 negative options
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choose a criteria.  Please try again.");

    }
    // First if statement that uses user input prompts to determine choices
    // Else if for 4 positive options
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

        choices = character.concat(number, alphaLower, alphaUpper);
    }
    // Else if for 3 positive options
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, alphaUpper);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, alphaLower);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(alphaLower, alphaUpper);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(alphaLower, alphaUpper);
    }
    // Else if for 2 positive options 
    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(alphaLower);

    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(alphaUpper);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = alphaLower.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = alphaLower.concat(alphaUpper);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(alphaUpper);
    }
    // Else if for 1 positive option
    else if (confirmCharacter) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = alphaLower;
    }
    else if (confirmUppercase) {
        choices = alphaUpper;
    };

    // password variable is an array placeholder for user generated amount of length
    var password = [];

    // Start random selection variables:
    // Random selection for all variables: 
    for (var i = 0; i < passwordLength; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    // This joins the password array and converts it to a string
    var passwordToString = password.join("");
    UserInput(passwordToString);
    return passwordToString;
}
// This puts the password value into the textbox
function UserInput(passwordToString) {
    document.getElementById("password").textContent = passwordToString;

}