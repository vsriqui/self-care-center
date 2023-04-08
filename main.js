var buddha = document.querySelector(".buddha");

var affirmationButton = document.getElementById("affirmation");
var mantraButton = document.getElementById("mantra");
var receiveButton = document.querySelector(".receive");

var message = document.querySelector(".message");

receiveButton.onclick = displayMessage;
mantraButton.onclick = unclickAffirmation
affirmationButton.onclick = unclickMantra


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

// ** Adding Random Message to Box Based on Selected Radio Button ** //

function displayMessage() {
    buddha.style.display = "none";
    message.style.setProperty("display","block");
    if(affirmationButton.checked) {
        message.innerText = chooseAffirmation();          
    } else if(mantraButton.checked) {
        message.innerText = chooseMantra();            
    } else {
        message.innerText = "You can't receive, if you dont choose.";       
    }
}