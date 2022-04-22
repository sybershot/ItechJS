//Write a loop that will display any number between 1 - 100 that is a multiple of both 3 and 5.
var nums = "";

for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0){
        nums += i + " ";
    }
}

console.log(nums);