import "./styles.css";
const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']");
let lastChecked;
function selection(e) {
  //check if the shift key is down && they are checking it
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    //loop over every checkbox and find initial and final box
    //to be checked
    checkboxes.forEach(box => {
      console.log(box);
      if (box === this || box === lastChecked) {
        inBetween = !inBetween;
        console.log("Start to check then between");
      }
      if (inBetween) {
        box.checked = true;
      }
    });
  }
  lastChecked = this;
}
checkboxes.forEach(item => item.addEventListener("click", selection));
