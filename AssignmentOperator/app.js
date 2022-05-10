//Find where the third B is in the sentence
var sentence = "The red bear jumped over the Big fence!",
    backward = "";

for (var i = sentence.length - 1; i >= 0; i--) {
    backward = backward + sentence.charAt(i); // Or i could use backward += sentence.charAt(i); which is shorter.
}

console.log(backward);