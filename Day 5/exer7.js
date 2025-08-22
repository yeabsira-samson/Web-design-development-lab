// dom 
// exer 2
const button = document.getElementById("myButton");
const text = document.getElementById("text");
button.addEventListener("click", () => {
  text.style.display = (text.style.display === "none") ? "block" : "none";
  console.log(text.style.display);
});