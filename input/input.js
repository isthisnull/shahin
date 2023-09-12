const desInputElement = document.getElementById("des-placeholder-counter");
const nameInputElement = document.getElementById("name-input-elem");

const desInputStr = desInputElement.value;
desInputElement.addEventListener("keyup", count);
nameInputElement.addEventListener("keyup", shomaresh);

function shomaresh() {
  const nameInputStr = nameInputElement.value;
  for (i = -1; i < nameInputStr.length; i++) {
    document.getElementById(
      "name-counter"
    ).innerHTML = `${nameInputStr.length}/50`;
  }
}
function count() {
  const desInputStr = desInputElement.value;
  for (i = -1; i < desInputStr.length; i++) {
    document.getElementById("demo").innerHTML = `${desInputStr.length}/100`;
  }
}
