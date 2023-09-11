let counter = 0;
const kirelement = document.getElementById("des-placeholder-counter");
kirelement.addEventListener("keydown", count);

/* function myFunction() {
  if (event.key && event.key !== "Backspace") {
    counter++;
    console.log(event.key);
    console.log(counter);
  } else if (event.key === "Backspace") {
    counter--;
    console.log(counter);
  }
} */

const mamad = document.getElementById("des-placeholder-counter").value;
function count() {
  for (i = 0; i < mamad.length; i++) {
    console.log(mamad[i]);
  }
  console.log(mamad);
}
