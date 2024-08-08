const dec = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const inc = document.querySelector(".increase");
let num = document.querySelector(".num");
let count = 0;
num.textContent = count;
dec.addEventListener("click", () => {
  count--;
  num.textContent = count;
  if (count < 0) num.style.color = "red";
  if (count === 0) num.style.color = "white";
});
inc.addEventListener("click", () => {
  count++;
  num.textContent = count;
  if (count > 0) num.style.color = "green";
});
reset.addEventListener("click", () => {
  count = 0;
  num.textContent = count;
  num.style.color = "white";
});
