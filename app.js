var btntranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

function clickHandler() {
    outputDiv.innerText = "ajajajajajajaja " + txtinput.value; 
};

btntranslate.addEventListener("click", clickHandler)