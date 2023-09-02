const btnChangeColor = document.querySelector("#js");

btnChangeColor.addEventListener("change", () => {
  const colors = document.querySelectorAll(".color");

  if (btnChangeColor.checked) {
    colors.forEach((color) => {
      color.classList.add("green");
    });
  } else {
    colors.forEach((color) => {
      color.classList.remove("green");
    });
  }
});
