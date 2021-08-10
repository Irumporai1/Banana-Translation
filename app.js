var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var url="https://api.funtranslations.com/translate/minion.json"

function generateURL(txt){

    return url + "?text=" + txt;

}


function clickHandler() {
    var text=txtInput.value;
    fetch(generateURL(text))
    .then(response => response.json())
    .then(json => {
       var translatedText= json.contents.translated;
       outputDiv.innerText= translatedText;
    })
    
};

btnTranslate.addEventListener("click", clickHandler);
