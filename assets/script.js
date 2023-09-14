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
    const length = document.getElementById("length").value;
    const numbers = document.getElementById("numbers").checked;
    const uppercase = document.getElementById("uppercase").checked;
    const lowercase = document.getElementById("lowercase").checked;
    const symbols = document.getElementById("symbols").checked;

    const password= generatePassword(parseInt(length), numbers, uppercase, lowercase, symbols)


    var passwordText = document.querySelector("#password");

    passwordText.value = password;
 }
 





