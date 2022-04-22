//Write a loop that will display a fibonacci sequence starting with 0 and 1 until the final number is less than or equal to 1000. A fibonancci sequence is where each number is equal to the sum of the previous two numbers (e.g. 0, 1, 1, 2, 3, 5 ...).
var num1 = 0,
    num2 = 1,
    nextNum = 1,
    seq = "0 ";

while (nextNum <= 1000) {
    seq += nextNum + " ";
    nextNum = num1 + num2;
    num1 = num2;
    num2 = nextNum;
}

console.log(seq);