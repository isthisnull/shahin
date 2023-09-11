let counter = 0;
const kirelement = document.getElementById("des-placeholder-counter");
kirelement.addEventListener("keyup", count);

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
const koni = document.getElementById("des-placeholder-counter");
const mamad = koni.value;
function count() {
  console.log(document.getElementById("des-placeholder-counter").value);
  for (i = 1; i < mamad.length; i++) {
    console.log(mamad[i]);
  }
}
