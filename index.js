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
}
function passwordGenerator(){
    let password = ""
    for (let i=0; i<15; i++){
        password += characters[Math.floor(Math.random()* characters.length)]
    }
    return password
}

function copyToClipboard(passwordButton){
    const passwordText = document.getElementById(passwordButton).textContent
    navigator.clipboard.writeText(passwordText)
        .then(()=>{
            showNotification("Password copied to Clipboard")
        })
        .catch(err => {
            console.error("Failed to copy password: ", err);
            showNotification("Failed to copy password", true)
        })
    console.log(passwordText)
}

function showNotification(message, isError = false){
    const notification = document.getElementById("notification");
    notification.textContent = message;
    notification.style.backgroundColor = isError ? "#FF5C5C" : "#55F991";
    notification.style.display ="block";

    setTimeout(()=>{
        notification.style.display = "none";
    }, 3000)
}


