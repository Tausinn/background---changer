const inputBox = document.getElementById("input-box");
const inputName = document.getElementById("input-name");
const yourName = document.getElementById("your-name");
const afterMsg = document.getElementById("after-message");

function backgroundChange(){
    if(inputBox.value === ""){
        alert("Please enter a color!");
    }
    let anotherMsg = "It's pretty cool right?"
    afterMsg.innerHTML = anotherMsg;
        let color = inputBox.value;
        document.body.style.backgroundColor = color;
    }

 function printsName(){
    if(inputName.value === ""){
        alert("Please enter your name!");
    }
    let userName = inputName.value;
    let greetingMsg = `Hello ${userName}, thanks for visiting my webpage!`
    yourName.innerHTML  = greetingMsg + "You can change the background color of this page by using the input box below!";
}


  
    
    
