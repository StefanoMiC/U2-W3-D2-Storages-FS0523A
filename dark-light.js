window.addEventListener("DOMContentLoaded", () => {
  // siamo qui al caricamento del DOM

  // Seleziono i bottoni e applico evento di tipo click
  const btnSetDark = document.getElementById("setDark");
  const btnRemDark = document.getElementById("remDark");
  const btnResetInput = document.getElementById("resetInput");
  const txtInput = document.querySelector("input[type='text']");

  btnSetDark.onclick = setDarkTheme; // le funzioni che associamo agli eventi NON DEVONO avere le parentesi, altrimenti eseguiremmo noi la funzione e non lo farebbe l'evento
  btnRemDark.onclick = remDarkTheme;
  txtInput.onchange = handleInput; // handleInput(event)
  btnResetInput.onclick = () => {
    localStorage.removeItem("searchQuery");
    txtInput.value = "";
  };

  // appena si carica la pagina (in realtà solo il DOM) andiamo a controllare la presenza della chiave "theme"
  loadThemeStyle();
  preLoadText(txtInput);
});

const preLoadText = inputNode => {
  const storedText = localStorage.getItem("searchQuery");
  if (storedText && inputNode) {
    inputNode.value = storedText;
  }
};

const loadThemeStyle = () => {
  const themeInStorage = localStorage.getItem("theme"); // otteniamo "dark" oppure null
  const html = document.documentElement;

  if (themeInStorage) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
};

const setDarkTheme = () => {
  // applico la nuova chiave-valore nel localStorage
  localStorage.setItem("theme", "dark");

  // controlliamo il localStorage e la funzione determinerà da sola l'applicazione della classe
  loadThemeStyle();
};

const remDarkTheme = () => {
  // rimuovo la chiave e conseguente valore dal localStorage
  localStorage.removeItem("theme");

  // controlliamo il localStorage e la funzione determinerà da sola la rimozione della classe
  loadThemeStyle();
};

const handleInput = event => {
  localStorage.setItem("searchQuery", event.target.value);
};
