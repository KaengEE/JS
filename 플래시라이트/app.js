//alert("test");
let lightOff = true; //불끈상태
const light = document.getElementById("light");
const button = document.getElementById("button");

function glow() {
  if (lightOff) {
    light.style.visibility = "visible";
    button.style.top = "85px";
    button.style.boxShadow = "none";
    lightOff = false;
  } else {
    light.style.visibility = "hidden";
    button.style.top = "80px";
    button.style.boxShadow = "0px 5px #666666";
    lightOff = true;
  }
}
