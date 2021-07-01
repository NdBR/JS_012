// deel 1
let colors = ["yellow", "blue", "red", "orange"];
// while loop

var i = 0
while (i < colors.length) {
    console.log(colors[i]);
    i++;// deze telt er telkens 1 bij zodat na 5 loops hij eruitbreekt en naar de document.write gaat
}

// for loop
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// array methods"
// Nieuwe stijl: array methods
// Omdat itereren over arrays iets is dat zo vaak gebeurt heeft de community die 
// JavaScript verder ontwikkelt wat nieuwe handige dingen bedacht (eigenlijk afgekeken) 
// om dit wat makkelijker, leesbaarder en minder foutgevoelig te maken. Deze nieuwe dingen 
// zijn "array methods".
// Elk array in JavaScript heeft de beschikking over deze ingebouwde functies 
// die itereren over die array. De verschillende array methods doen verschillende 
// dingen, maar ze itereren allemaal over een array.

// Je kan met een paar simpele array methods al veel doen. 
// Er zijn meer array methods waar je later meer over gaat leren. 
// Dus raak vooral nog niet verstrikt in array methods wanneer je gaat googlen.
// Array.prototype.forEach()
colors.forEach(element => console.log(element));
// Hoeveel regels neemt mijn for loop en mijn while loop in beslag?
// while = 5 
// for = 3

// Hoeveel regels neemt mijn forEach method in beslag?
// foreach = 1

// Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. 
// een for of een while loop? Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?
// je hoeft niet alles appart te defineren/values toe te kennen. daarnaast past hij automatisch aan
// en neemt hij een volgorde aan, die je ook niet hoeft te defineren, ook stop deze uit zichzelf ( niet oneindig)

// Kun je een array method gebruiken op een object? Het antwoord is nee.
// Stel je hebt een object met 45 properties. Probeer eens uit te zoeken (gebruik Google) 
// hoe je tóch die 45 properties kunt console.loggen met een loop: Looping through the properties of an object.
// Probeer dit stukje code uit en gebruik hier een object met 5 properties voor. Ben je nu aan het itereren?

const person = {
    firstName: "Niels de boer",
    age: 36,
    evaluations: [7, 10, 9],

};

var objectKeys = Object.keys(person);
const lengthObject = objectKeys.length;
// console.log(objectKeys);
// console.log(objectKeys.length);
// console.log(objectKeys[2]);
// console.log(person[objectKeys[1]]);
// console.log(lengthObject);

// mijn oplossing!
for (let i = 0; i < lengthObject; i++) {
    console.log(person[objectKeys[i]])

}
// na hulp van Ben Linnenbank
for (let i = 0; i < lengthObject; i++) {
    console.log(objectKeys[i])
}

for (property in person) {
    console.log(person[property]);
    console.log(property);
}