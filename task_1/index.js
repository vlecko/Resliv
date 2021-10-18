document.querySelector("#name_input").addEventListener("input", function (event) {
  if (event.target.defaultValue !== event.target.value) {
    event.target.classList.add("red");
  } else {
    event.target.classList.remove("red");
  }
});
