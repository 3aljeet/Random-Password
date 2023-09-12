// Assignment code here
function generatePassword() {
  const lowerC = "acdefghijklmnopqrstuvwxyz";
  const upperC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberC = "0123456789";
  const specialC = "!@#$%^&*()_+";
  
  var password = "";
  var passwordChar = "";

  // cerating prompt for password lengh 
  var passwordLength = prompt("How many characters would you like you password to be? Password must be between 8-128 characters");
  passwordLength = parseInt(passwordLength);

  if (passwordLength < 8) {
    alert("Password must be at least 8 characters");
    return "";
  }
  
  if(passwordLength > 128) {
    alert("Password must be less than 128 characters");
    return "";
  }
  //creating a boolean (yes or no) for the lowercase letter 
  var lowercaseChar = confirm("Do you want lowercase characters in your password?");
  if(lowercaseChar) {
    //connecting the new variable with the values that will be validated
    passwordChar += lowerC;
  }

  //creating a boolean (yes or no) for the uppercase letter 
  var uppercaseChar = confirm("Do you want uppercase characters in your password?");
  if(uppercaseChar) {
 //connecting the new variable with the values that will be validated
    passwordChar += upperC;
  }
  
  //creating a boolean (yes or no) for the number option 
  var numberChar = confirm("Do you want numbers in your password?");
  if(numberChar) {
  //connecting the new variable with the values that will be validated
    passwordChar += numberC;
  }
// creating a boolean(yes or no) for the special characters
  var specialChar = confirm("Do you want special characters in your password?");
  if(specialChar) {
    passwordChar += specialC;
  }

  for (var i = 0; i < passwordLength; i++) {
    //apending the random characters in "passwordCha" to the password string
    password += passwordChar[Math.floor(Math.random() * passwordChar.length)];
  }
  return password;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

