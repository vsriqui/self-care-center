var buddha = document.querySelector(".buddha");
// ** Variables ** //
// ** Button Variables ** //
var affirmationButton = document.getElementById("affirmation");
var mantraButton = document.getElementById("mantra");
var receiveButton = document.querySelector(".receive");
var enterButton = document.querySelector(".enter");

var message = document.querySelector(".message");

var whichHeader = document.querySelector(".which");
var buttonSection = document.querySelector(".button");
var loginSection = document.querySelector(".login");
var messagesSection = document.querySelector(".messages");
var titleSection = document.querySelector(".title");

var user = document.querySelector(".user")
var userWelcome = document.querySelector(".userWelcome")

receiveButton.onclick = displayMessage;
mantraButton.onclick = unclickAffirmation;
affirmationButton.onclick = unclickMantra;
onload = function () {
    whichHeader.style.display = "none";
    buttonSection.style.display = "none";
    messagesSection.style.display = "none";
    // message.style.setProperty("display","block");
}
enterButton.onclick = enter;

function enter() {
    if (user.value) {
    titleSection.style.setProperty("padding-bottom","0px");
    userWelcome.innerText = `Hi, ${user.value}, welcome to a place to help you on your journey of innerpeace.`
    whichHeader.style.display = "block";
    buttonSection.style.display = "flex";
    messagesSection.style.display = "flex";
    loginSection.style.display = "none";
    // message.style.setProperty("display","block");
    }
}

function hide(element) {
    element.classList.add("hidden")
}
  
  function show(element) {
    element.classList.remove("hidden")
}

  function unclickAffirmation() {
    affirmationButton.checked = false
}
  function unclickMantra() {
    mantraButton.checked = false
}

// ** Choosing Random Message From Arrays ** //
function chooseAffirmation() {
    return affirmations[Math.floor(Math.random() * affirmations.length)];
}

function chooseMantra() {
    return mantras[Math.floor(Math.random() * mantras.length)];
}

// ** Adding Random Message to Buddha Box Based on Selected Radio Button ** //

function displayMessage() {
    buddha.style.display = "none";
    message.style.setProperty("display","block");
    if(affirmationButton.checked) {
        message.innerText = chooseAffirmation();          
    } else if(mantraButton.checked) {
        message.innerText = chooseMantra();            
    } else {
        message.innerText = `You can't receive, if you don't choose ${user.value}!`;       
    }
}