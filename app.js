var btntranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");


console.log(txtinput)

function clickHandler() {
    console.log("clicked!");
    console.log("input", txtinput.value);
};

btntranslate.addEventListener("click", clickHandler)