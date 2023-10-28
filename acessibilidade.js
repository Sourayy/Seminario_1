const setTheme = (newTheme) => {
  document.body.style.backgroundColor = newTheme === "dark" ? "black" : "rosybrown";
  document.body.style.color = newTheme === "dark" ? "white" : "black";
};

function darkMode() {
  const darkModeToggle = document.querySelector("input[name=theme]");
  setTheme(darkModeToggle.checked ? "dark" : "light");
}

const darkModeToggle = document.querySelector("input[name=theme]");
darkModeToggle.addEventListener("click", darkMode);

function mudaFonte(tamanho) {
  // Obtemos o tamanho de fonte atual
  var tamanhoAtual = parseFloat(getComputedStyle(document.body).fontSize);

  // Definimos o incremento/decremento desejado
  var incremento = 2; // Pode ajustar esse valor conforme necessário

  // Obtemos todos os elementos de input na página
  var inputs = document.getElementsByTagName("input");
  var buttons = document.getElementsByTagName("button");

  // Verificamos a ação solicitada e atualizamos o tamanho da fonte e dos botões
  if (tamanho === "mais") {
    tamanhoAtual += incremento;
  } else if (tamanho === "menos") {
    tamanhoAtual -= incremento;
  } else if (tamanho === "padrao") {
    tamanhoAtual = 16; // Tamanho de fonte padrão (você pode ajustar isso conforme necessário)
  }

  // Atualizamos o tamanho da fonte e dos botões
  document.body.style.fontSize = tamanhoAtual + "px";

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].style.fontSize = tamanhoAtual + "px";
  }

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.fontSize = tamanhoAtual + "px";
    buttons[i].style.width = "auto"; // Isso permite que o tamanho do botão se ajuste ao texto
  }
}


function imprimirPagina() {
    window.print();
}