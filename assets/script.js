// Assignment code here
function generatePassword() {
    var key = '';
    var inputs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!"#$%&()*+,-./:;<=>?@^_`{|}~';

         for (let i = 1; i <= 12; i++) {
            var number = Math.floor(Math.random() * inputs.length);
            key += inputs.charAt(number)
         }
    return key
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword() 

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
