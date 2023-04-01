let elForm = document.querySelector(".login__form");
let elUsernameInput = document.querySelector(".username__input");
let elPaswordInput = document.querySelector(".password__input");

elForm.addEventListener("submit", evt => {
  evt.preventDefault();

  let usernameValue = elUsernameInput.value;
  let passwordValue = elPaswordInput.value;

  fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: usernameValue,
      password: passwordValue,
    }),
  })
    .then(res => res.json())
    .then(data => {
      if (data?.token) {
        window.location.replace("index.html");
      } else {
        elPaswordInput.value = null;
      }
    });
});
