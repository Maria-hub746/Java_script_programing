var animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"]
var i = 0

while (i < animals.length) {
	console.log("Awesome " + animals[i]);
	i++
}

///

var alphabet = "abcdefghijklmnoprqstuvwxyz";
var randomString = "";

while (randomString.length < 6) {
    randomString+= Math.floor(Math.random() * alphabet.length);
    console.log(randomString)
}

var input = "javascript is awesome";
var output = "";

for (var i = 0; i < input.length; i++) {
  if (input[i] === "a") {
    output += "4";
  } else if (input[i] === "e") {
    output += "3";
  } else if (input[i] === "i") {
    output += "1";
  } else if (input[i] === "o") {
    output += "0";
  } else {
    output += input[i];
  }
}

console.log(output)