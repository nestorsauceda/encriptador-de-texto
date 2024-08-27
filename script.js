var muneco = document.querySelector(".img_mono");
var text_1 = document.getElementById("text_1");
var text_2 = document.getElementById("text_2");
var text_result = document.querySelector(".text__result");
var container_result = document.querySelectorAll(".ocultar");

function encriptarBtn() {
  ocurtar();
  var input = document.getElementById("container__text").value;
  var output = encriptar(input);
  text_result.textContent = output;

  document.getElementById("container__text").value = "";
  const copyButton = document.getElementById("btn__copy");
  copyButton.innerText = "Copiar";
}

function desencriptarBtn() {
  ocurtar();
  var input = document.getElementById("container__text").value;
  var output = desencriptar(input);
  text_result.textContent = output;

  document.getElementById("container__text").value = "";
  const copyButton = document.getElementById("btn__copy");
  copyButton.innerText = "Copiar";
}

function encriptar(text) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (text.includes(matrizCodigo[i][0])) {
      text = text.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }
  return text;
}

function desencriptar(text) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (text.includes(matrizCodigo[i][1])) {
      text = text.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
  }
  return text;
}

function ocurtar() {
  muneco.classList.add("ocultar");
  text_1.classList.add("ocultar");
  text_2.classList.add("ocultar");
  container_result[0].classList.add("activate");
  container_result[1].classList.add("activate");
  text_result.classList.add("container__result");
}

const btnCopy = document.getElementById("btn__copy");
btnCopy.addEventListener(
  "click",
  (copiar = () => {
    navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
      if (result.state === "granted" || result.state === "prompt") {
        var content = document.querySelector(".text__result").textContent;
        const tempInput = document.createElement("input");
        tempInput.value = content;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        const copyButton = document.getElementById("btn__copy");
        copyButton.innerText = "¡Copiado!";
      }
    });
  })
);
