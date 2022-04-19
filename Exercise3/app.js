//Find out how many hours have passed since 1/1/2000.
var curDate = new Date(),
    targetDate = new Date('January 1, 2000 00:00:00 GMT+00:00');
//Print it to the console.
console.log((curDate.getTime() - targetDate.getTime())/1000/60/60);