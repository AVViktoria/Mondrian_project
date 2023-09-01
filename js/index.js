const wightColor1 = document.getElementById("color1");
const wightColor2 = document.getElementById("color2");
const wightColor3 = document.getElementById("color3");
const btnChangeColor = document.querySelector("#js");

btnChangeColor.addEventListener("change", (event) => {
  if (btnChangeColor.checked) {
    wightColor1.classList.add("green");
    wightColor2.classList.add("green");
    wightColor3.classList.add("green");
  } else {
    wightColor1.classList.remove("green");
    wightColor2.classList.remove("green");
    wightColor3.classList.remove("green");
  }
});
