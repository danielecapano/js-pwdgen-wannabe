// Chiedere all'utente il suo nome:

//Dichiarare una variabile
let firstName;

//Assegnare alla variabile il valore restituito da un prompt
firstName = prompt("Ciao, qual è il tuo nome?");
console.log(firstName);

//Chiedere all'utente il suo cognome:

//Dichiarare una variabile
let lastName;

//Assegnare alla variabile il valore restituito da un prompt
lastName = prompt("Qual è il tuo cognome?");
console.log(lastName);

//Chiedere all'utente il suo colore preferito:

//Dichiarare una variabile
let color;

//Assegnare alla variabile il valore restituito da un prompt
color = prompt("Qual è il tuo colore preferito?");
console.log(color);
//Generare un numero casuale fra 1 e 99:

//Dichiarare una variabile

let randomNumber;
//Assegnare alla variabile il valore restituito dal calcolo
randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);

//Generare il messaggio da far apparire:

//Dichiarare una variabile che contiene la prima parte del messaggio:
let firstPartOfMessage = "La tua password è: ";

//Dichiarare una variabile passwordValue dove concateniamo tutti i valori ottenuti
let passwordValue =
  firstPartOfMessage + firstName + lastName + color + randomNumber;
console.log(passwordValue);
//Far apparire a video la striga appena creata:

//Recuperare con js l'elemento del dom con id="message"
const passwordDomElement = document.getElementById("password");

//Modificare l'innerHTML del h1 con il valore della variabile passwordValue
passwordDomElement.innerHTML = passwordValue;
