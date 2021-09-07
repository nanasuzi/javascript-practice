const form = document.getElementById("form");
const input = document.getElementById("input");

form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(input.value);
});