// Array of special characters to be included in password, variable 'specialCharacters'
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password, variable 'numericCharacters'
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password, variable 'lowerCasedCharacters'
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password, variable 'upperCasedCharacters'
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options using the confirm method called 'promptUser'
function promptUser() {
  // creating 'userLength' variable using let so that its value can be changed
  let userLength;
  // do while loop
  do {
    // prompt the user to enter a number, parse the input to an integer, and save it to the variable 'userLength'
    userLength = parseInt(
      prompt(
        "Enter the length of the password you'd like to generate (between 8 and 128)"
      )
    );
    // do the statement above while the condition below is true, or in other words, do the statement above until the condition below is false
  } while (isNaN(userLength) || userLength < 8 || userLength > 128);

  // save the inputs to a corresponding variable, these will be saved as boolean values; true if the user enters confirm, and false if the user enters cancel
  const useLowercase = confirm(
    "Click 'OK' to Include lowercase characters, 'Cancel' to not"
  );
  const useUppercase = confirm(
    "Click 'OK' to Include uppercase characters, 'Cancel' to not"
  );
  const useNumbers = confirm(
    "Click 'OK' to Include numeric characters, 'Cancel' to not"
  );
  const useSpecial = confirm(
    "Click 'OK' to Include special characters, 'Cancel' to not"
  );

  // using the return keword to store the below variables (which hold the users inputs as boolean values) for later
  return {
    userLength,
    useLowercase,
    useUppercase,
    useNumbers,
    useSpecial,
  };
}

// Function for getting a random element from an array
// function 'randomNum', that accepts one parameter/ argument; placeholder name 'arr'
function randomNum(arr) {
  // variable 'randomIndex' to hold the random number thats is generated using math.floor, math.random and the length of the specific array (here using placeholder 'arr')
  const randomIndex = Math.floor(Math.random() * arr.length);
  // return arr[randomIndex], which means the specific array ('arr' is a placeholder), then a specifix index from that array (this random number was generated in line 134, and stored in the var 'randomIndex')
  return arr[randomIndex];
}

// Function to generate password based on user prompts
// function 'generatePassword' (takes no arguments)
function generatePassword() {
  // variable 'usableChars' holds the function 'promptUser' from line 92
  const usableChars = promptUser();
  // variable 'allChars', empty array as will store one long concatenated array of all the available charcaters to use in variable 'password' (line 182), depending on whether the returned values from the function 'promptUser' (now stored within 'usableChars') are true or false
  let allChars = [];

  if (usableChars.useLowercase) {
    // 'allChars' is equal to 'allChars' + 'lowerCasedCharcters' (concatenation), but only if 'useLowerCase' holds the boolean value true from the function 'promptUser', which is now stored in 'usableChars'
    allChars = allChars.concat(lowerCasedCharacters);
  }

  if (usableChars.useUppercase) {
    // 'allChars' is equal to 'allChars' + 'upperCasedCharcters' (concatenation), but only if 'useUpperCase' holds the boolean value true from the function 'promptUser', which is now stored in 'usableChars'
    allChars = allChars.concat(upperCasedCharacters);
  }

  if (usableChars.useNumbers) {
    // 'allChars' is equal to 'allChars' + 'numericCharcters' (concatenation), but only if 'useNumbers' holds the boolean value true from the function 'promptUser', which is now stored in 'usableChars'
    allChars = allChars.concat(numericCharacters);
  }

  if (usableChars.useSpecial) {
    // 'allChars' is equal to 'allChars' + 'specialCharcters' (concatenation), but only if 'useSpecial' holds the boolean value true from the function 'promptUser', which is now stored in 'usableChars'
    allChars = allChars.concat(specialCharacters);
  }

  // if the above 4 if statments are false, then allChars will stil be an empty array (or equal to 0), and therefore the user must be told that they need to select atleast one character type, and to start again
  if (allChars.length === 0) {
    alert(
      "At least one character type should be selected. \nClick 'Generate Password' to start again"
    );
    return null;
  }

  // variable 'password' equals an empty string, as will store the password created in the for loo[ below (starting line 179)
  let password = "";
  // for loop to generate password
  for (let i = 0; i < usableChars.userLength; i++) {
    const randomChar = randomNum(allChars);
    password += randomChar;
  }

  // return the var 'password' for use later, which was created in the above for loop (178)
  return password;
}

// Get references to the #generate element using querySelector method
var generateBtn = document.querySelector("#generate");

// Write password to the #password input using querySelector method
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button using .addEventListener method
generateBtn.addEventListener("click", writePassword);
