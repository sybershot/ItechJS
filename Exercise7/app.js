//Remove all duplicates from this array
var fruits = ["banana", "kiwi", "mango", "kiwi", "apple", "kiwi", "pear", "banana", "apple"];

fruits.sort();

for (i = fruits.length - 1; i >= 0; i--) {
	nextVal = fruits[i];
	
	if (nextVal === fruits[i - 1]) {
		fruits.splice(i, 1);
	}
}

console.log(fruits);