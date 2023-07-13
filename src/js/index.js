const form = document.querySelector(".dados");
const nomeCompleto = document.getElementById("name");
const correio = document.getElementById("email");
const contato = document.getElementById("telefone");
const sms = document.getElementById("mensagem");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  validarNome();
  validarEmail();
  validarContato();
  validarSms();
});

function validarNome() {
  const nomeCompletoValue = nomeCompleto.value;

  if (nomeCompletoValue === "") {
    errorInput(nomeCompleto, "Preencha seu Nome");
  } else {
    const formItem = nomeCompleto.parentElement;
    formItem.classList = "form-content succes";
  }
}

function validarEmail() {
  const correioValue = correio.value;

  if (correioValue === "") {
    errorInput(correio, "Preencha seu Email");
  } else {
    const formItem = correio.parentElement;
    formItem.classList = "form-content succes";
  }
}

function validarContato() {
  const contatoValue = contato.value;

  if (contatoValue === "") {
    errorInput(contato, "Preencha seu Telefone");
  } else {
    const formItem = contato.parentElement;
    formItem.classList = "form-content succes";
  }
}

function validarSms() {
  const smsValue = sms.value;

  if (smsValue === "") {
    errorInput(sms, "Preencha com uma mensagem");
  } else {
    const formItem = sms.parentElement;
    formItem.classList = "form-content succes";
  }
}

function errorInput(input, message) {
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("p");

  textMessage.innerText = message;

  formItem.className = "form-content error";
}

function succes(input) {
  const formItem = input.parentElement;

  formItem.className = "form-content succes";
}
