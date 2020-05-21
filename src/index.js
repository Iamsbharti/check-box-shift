import "./styles.css";
const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']");

function selection(e) {
  console.log(e);
}
checkboxes.forEach(item => item.addEventListener("click", selection));
