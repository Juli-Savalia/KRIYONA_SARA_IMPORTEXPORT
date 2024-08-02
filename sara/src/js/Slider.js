import $ from "jquery"
// parallax 1st section

document.addEventListener("mousemove",parallax);
function parallax(e){
  document.querySelectorAll(".obj").forEach(function(move){
    var moving_val = move.getAttribute("data-value");
    var x = (e.clientX * moving_val) / 250;
    var y = (e.clientY * moving_val) / 250;

    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  })
}