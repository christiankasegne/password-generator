var characterLength = 8;
var choiceArr = [];

var upperCaseArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCaseArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var specialCharArr = ["!","@","#","$","%","^","&","*","(",")","_","-","+","|","{",];
var numberArr = ["1","2","3","4","5","6","7","8","9","0"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
    var correctPrompts = getPrompts();
    var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  }else {  
    passwordText.value = "";       
  }
}

function generatePassword() {
  var password = "";
  for(var i = 0; i < characterLength; i++){
    var randomindex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomindex];
  }
  return password;
}


function getPrompts() {
  choiceArr = [];
  characterLength = parseInt(prompt("How many characters would you like your password to contain? (choose between 8-129 characters"));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 129) {
    alert("password lenght must be between 8 - 129 charactars.");
    return false;
  }
  if (confirm("click okay to confirm including uppercase characters.")) {
    choiceArr =choiceArr.concat(upperCaseArr)
  } 
  if (confirm("click okay to confirm including Lowercase characters.")) {
    choiceArr =choiceArr.concat(lowerCaseArr)
  } 
  if (confirm("click okay to confirm including special characters.")) {
    choiceArr =choiceArr.concat(specialCharArr)
  }
  if (confirm("click okay to confirm including number characters.")) {
    choiceArr =choiceArr.concat(numberArr)
  }
  if (choiceArr.length ==0 ){
    alert("You must select at least one character type!");
    return false
  }
  return true
}
  


