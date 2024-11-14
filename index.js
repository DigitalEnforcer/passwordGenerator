const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne
let passwordTwo  
let passwordBtn1 = document.getElementById("password-one")
let passwordBtn2 = document.getElementById("password-two")

function getPassword(){
    passwordOne = passwordGenerator()
    passwordTwo = passwordGenerator()
    passwordBtn1.textContent = passwordOne
    passwordBtn2.textContent = passwordTwo
    console.log(passwordOne)
    console.log(passwordTwo)
}
function passwordGenerator(){
    let password = ""
    for (let i=0; i<15; i++){
        password += characters[Math.floor(Math.random()* characters.length)]
    }
    return password
}



