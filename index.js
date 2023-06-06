// button element
const btn = document.querySelector("button");
const spanColorValue = document.querySelector("span");

// button al click cambia lo sfondo del body con i valori passati dalle costanti
btn.addEventListener("click", () => {
  // calcolo numeri per i colori
  const changeColorRed = Math.ceil(Math.random() * 255);
  const changeColorGreen = Math.ceil(Math.random() * 255);
  const changeColorBlue = Math.ceil(Math.random() * 255);

  console.log(changeColorRed, changeColorGreen, changeColorBlue);

  document.body.style.backgroundColor = `rgb(${changeColorRed},${changeColorGreen},${changeColorBlue})`;

  spanColorValue.textContent = `Background-Color: rgb(${changeColorRed}, ${changeColorGreen}, ${changeColorBlue});`;
});
