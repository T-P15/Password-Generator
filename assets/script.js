// Assignment code here
function toggleForm() {
    var form = document.getElementById("myform");
    if (form.style.display === "none") {
      form.style.display = "block";
    } else {
      form.style.display = "none";
    }
  }

function generatePassword(length, numbers, uppercase, lowercase, symbols){

    let characters = '';

    if(numbers){
        characters += '0123456789'
    }

    if(uppercase){
        characters += 'ABCDEFGHIJKLMOPQRSTUVWXYZ'
    }

    if(lowercase){
        characters += 'abcdefghijklmnopqrstuvwxyz'
    }

    if(symbols){
        characters += '!@#$%^&*()_+-='
    }
    let passwordArray = [];

    while(passwordArray.length < length) {
        const character = characters[Math.floor(Math.random()* characters.length)];

        passwordArray.push(character)
    }

    return passwordArray.join('');
}

 function generate(){
    var length = document.getElementById("length").value;
    var numbers = document.getElementById("numbers").checked;
    var uppercase = document.getElementById("uppercase").checked;
    var lowercase = document.getElementById("lowercase").checked;
    var symbols = document.getElementById("symbols").checked;

    var password= generatePassword(parseInt(length), numbers, uppercase, lowercase, symbols)


    var passwordText = document.querySelector("#password");

    passwordText.value = password;
 }
 





