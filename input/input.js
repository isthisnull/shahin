let counter = 0;
const kirelement = document.getElementById("des-placeholder-counter");
kirelement.addEventListener("keydown", myFunction);

function myFunction() {
  if (event.key && event.key !== "Backspace") {
    console.log(event.key);
    console.log(counter);
    counter++;
  } else if (event.key === "Backspace") {
    counter--;
    console.log(counter);
  }
}
