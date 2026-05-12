function makeTextBigger() {
  alert("Hello, world!");
  document.getElementById("textInput").style.fontSize = "24pt";
}

function applyStyleChange() {
  alert("Style changed!");

  var textArea = document.getElementById("textInput");
  var isFancy = document.getElementById("fancyRadio").checked;

  if (isFancy) {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
  } else {
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
  }
}

function mooifyText() {
  var textArea = document.getElementById("textInput");
  var text = textArea.value.toUpperCase();

  var sentences = text.split(".");

  for (var i = 0; i < sentences.length - 1; i++) {
    sentences[i] = sentences[i].trim();
    if (sentences[i].length > 0) {
      sentences[i] = sentences[i] + "-Moo";
    }
  }

  textArea.value = sentences.join(".");
}
