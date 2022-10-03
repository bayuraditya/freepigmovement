function hiddenUl() {
  var element = document.getElementById("ul-responsive");
  element.classList.add("visually-hidden");
}
function showUl() {
  var element = document.getElementById("ul-responsive");
  element.classList.remove("visually-hidden");
}
var x1 = window.matchMedia("(min-width: 1000px)");
var x2 = window.matchMedia("(max-width: 400px)");
if (x1.matches) {
  // If media query matches
  hiddenUl();
}
if (x2.matches) {
  showUl();
}

//VOLUME CALCULATOR
var lengthRangeFeet = document.getElementById("lengthRange");
var widthRangeInch = document.getElementById("widthRange");
var thicknessRangeInch = document.getElementById("thicknessRange");
var typeRange = document.getElementById("typeRange");
var output = document.getElementById("value");

var lengthOutput = document.getElementById("lengthValue");
var widthOutput = document.getElementById("widthValue");
var thicknessOutput = document.getElementById("thicknessValue");
// var typeOutput = document.getElementById("typeValue");

var lengthRangeCM = lengthRangeFeet.value * 30.5;
var widthRangeCM = widthRangeInch.value * 2.5;
var thicknessRangeCM = thicknessRangeInch.value * 2.5;
var countVolume = lengthRangeCM * widthRangeCM * thicknessRangeCM;
var volume = countVolume * typeRange.value;
var volumeLiter = volume / 1000;
output.innerHTML = volumeLiter.toFixed(2) + " Liters";
lengthRangeFeet.oninput = function () {
  var count = this.value * 30.5 * widthRangeInch.value * 2.5 * thicknessRangeInch.value * 2.5 * typeRange.value;
  var volumeLiter = (count / 1000).toFixed(2);
  output.innerHTML = volumeLiter + " Liters";
  lengthOutput.innerHTML = this.value + "'";
};

widthRangeInch.oninput = function () {
  var count = this.value * 2.5 * lengthRangeFeet.value * 30.5 * thicknessRangeInch.value * 2.5 * typeRange.value;
  var volumeLiter = (count / 1000).toFixed(2);
  output.innerHTML = volumeLiter + " Liters";
  widthOutput.innerHTML = this.value + '"';
};
thicknessRange.oninput = function () {
  var count = this.value * 2.5 * widthRangeInch.value * 2.5 * lengthRangeFeet.value * 30.5 * typeRange.value;
  var volumeLiter = (count / 1000).toFixed(2);
  output.innerHTML = volumeLiter + " Liters";
  thicknessOutput.innerHTML = this.value + '"';
};
typeRange.oninput = function () {
  console.log(typeRange.value);

  var count = this.value * widthRangeInch.value * 2.5 * thicknessRangeInch.value * 2.5 * lengthRangeFeet.value * 30.5;
  var volumeLiter = (count / 1000).toFixed(2);
  output.innerHTML = volumeLiter + " Liters";
};

// console.log(lengthRangeCM.value);
// console.log(widthRangeCM.value);
// console.log(thhicknessRangeCM.value);
