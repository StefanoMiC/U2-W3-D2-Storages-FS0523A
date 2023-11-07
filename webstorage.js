// 1) localStorage --> permanenza dei dati finché l'utente non li cancella manualmente (cancellando i dati di navigazione del browser)
// 2) sessionStorage --> permanenza dei dati finché il tab o la finestra intera non vengono chiusi

// utilizziamo gli stessi metodi per entrambi i motori di storage:
// .setItem(key, value) --> salva l'elemento nello storage
// .getItem(key) --> cerca un elemento già salvato con una chiave specifica (ritorna null se non trovata)

// i valori tornati dagli storage sono SEMPRE in formato stringa!

// .removeItem(key) --> rimuove una singola chiave dallo storage e conseguente valore
// .clear() --> cancella tutti dati dallo storage per quello specifico dominio

const LIVE_LECTURE_KEY = "liveLecture";

localStorage.setItem(LIVE_LECTURE_KEY, true); // verrà convertito in stringa "true"

const isLive = localStorage.getItem(LIVE_LECTURE_KEY);
console.log(isLive === "true" ? true : false);

const removeKey = function () {
  console.log(localStorage.getItem(LIVE_LECTURE_KEY)); // "true"
  localStorage.removeItem(LIVE_LECTURE_KEY);
  console.log(localStorage.getItem(LIVE_LECTURE_KEY)); // null
};

// numbers
localStorage.setItem("numberItem", 5890);
console.log(parseInt(localStorage.getItem("numberItem"))); // il metodo ci ritorna una stringa per il numero precedentemente salvato,
//quindi se mi serve di fare operazioni algebriche dovrò necessariamente convertirlo con un metodo adeguato

// arrays
// localStorage.setItem("arrayItem", [54, 0, 10]); // "54,0,10" non molto gestibile
localStorage.setItem("arrayItem", JSON.stringify([54, 0, 10])); // "[54,0,10]": String
const parsedArray = JSON.parse(localStorage.getItem("arrayItem")); // [54,0,10]: Array
console.log(Array.isArray(parsedArray)); // true

//objects
const myObj = { name: "Stefano", location: { area: "Europe" } };
console.log(myObj);
localStorage.setItem("objItem", myObj); // [object, Object] - il dato è perso
localStorage.setItem("objItem", JSON.stringify(myObj)); // "{ "name": "Stefano", "location": { "area": "Europe" } }" - il dato è converito in stringa, ed è ricavabile con un parse sull'oggetto JSON

const objAsString = localStorage.getItem("objItem");
const objParsed = JSON.parse(objAsString);
console.log(objParsed);
objParsed.location.area = "USA";
console.log(myObj.location.area);
console.log(objParsed.location.area);

// dates
localStorage.setItem("dateItem", new Date());

const dateAsString = localStorage.getItem("dateItem");
const dateParsed = new Date(dateAsString);
console.log(dateParsed.toLocaleString("it-IT"));

document.body.innerHTML += dateParsed.toLocaleString("it-IT");
document.body.innerHTML += myObj.name;
