let mainContainer = document.querySelector(".container");
let email = document.querySelector("input");

let subscribeButton = document.querySelector(".subscribe");

subscribeButton.onclick = function () {
  let emailValue = email.value;
  let emailValid = validateEmail(emailValue);

  if (!emailValid) errorMessage();
  else {
    showMessageSuccess();
    reloadPage();
  }
};

function validateEmail(email) {
  // Regular expression to validate an email address.
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Test the email against the regular expression.
  return emailRegex.test(email);
}

function errorMessage() {
  let label = document.querySelector("label");
  label.classList.add("error");

  let p = document.createElement("p");
  p.classList.add("error");
  p.innerHTML = "Valid email required";

  label.appendChild(p);
}

function showMessageSuccess() {
  mainContainer.remove();

  let container = document.createElement("div");
  container.classList.add("container-message-success");

  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image");
  let img = document.createElement("img");
  img.src = "../assets/images/icon-success.svg";
  imgContainer.appendChild(img);

  let titleContainer = document.createElement("div");
  titleContainer.classList.add("title");
  let title = document.createElement("h1");
  title.innerHTML = "Thanks for subscribing!";
  titleContainer.appendChild(title);

  let messageContainer = document.createElement("div");
  messageContainer.classList.add("message");
  let spanEmail = document.createElement("span");
  spanEmail.innerHTML = `karam@gmail.com`;
  messageContainer.innerHTML = `A confirmation email has been sent to ${spanEmail} Please open it and click the button inside to confirm your subscription.`;

  let dismissButton = document.createElement("button");
  dismissButton.classList.add("dismiss");
  dismissButton.innerHTML = "Dismiss message";

  container.appendChild(imgContainer);
  container.appendChild(titleContainer);
  container.appendChild(messageContainer);
  container.appendChild(dismissButton);

  document.body.appendChild(container);
}
function reloadPage() {
  let dismissButton = document.querySelector(".dismiss");
  dismissButton.onclick = function () {
    window.location.reload();
  };
}
