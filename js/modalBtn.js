// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("modalBtn");

// Get the <span> element that closes the modal
var span = document.querySelector(".close");

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

let login = document.querySelector("#login");
let pass = document.querySelector("#password");
let submitBtn = document.querySelector(".modal_submit");

submitBtn.onclick = function (e) {
  e.preventDefault();
  input1 = login.value;
  input2 = pass.value;
  input3 = age.value;
  input4 = email.value;
  console.log("Имя клиента: " + input1 + '.');
  console.log("Фамилия клиента: " + input2 + '.');
  console.log("Возраст клиента: " + input3 + '.');
  console.log("Почта клиента: " + input4 + '.');
  alert(
    "Спасибо за запрос, обязательно с вами свяжемся,можете закрывать форму"
  );
  return;
};
