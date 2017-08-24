var div1 = $(".div1")
var div2 = $(".div2")
var div3 = $(".div3")
var div4 = $(".div4")
var div5 = $(".div5")
var button = $("#startButton")
var timer;
var interval;
var button;
//var wrapper = $(".div1", ".div2", ".div3", ".div4", ".div5").toArray();
//$("#startButton").on("click", switchColor)

button.on("click", doTimer)
button.on("click", switchColor)

function switchColor(){
div1.css("background-color", "rgb(136, 109, 163)");
div2.css("background-color", "rgb(239, 144, 163)");
div3.css("background-color", "rgb(243, 61, 63)");
div4.css("background-color", "rgb(249, 183, 148)");
div5.css("background-color", "rgb(56, 69, 111)")
}

function doTimer(){
  timer = setInterval(timeIt, 5000);
}
function timeIt(){
  console.log("Hello");
}
function stopTimer() {
  clearInterval(timer);
}
//function random(){
  //wrapper [Math.floor(Math.random() * wrapper.length)]
//}
