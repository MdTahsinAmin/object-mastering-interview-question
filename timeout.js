function doSomething(){
    console.log("My name is Tanvir Amin");
}
// setTimeout { all executions are complete than setTimeout execute } one time execution 
//setTimeout(function , time);
console.log("Tanzir");
//setTimeout(doSomething,10000);
setTimeout(() => {
    console.log("Lazy");

},4000)

// setInterval doing aging aging using time interval more time execution some break time 
setInterval(function(){
    console.log('doing it');
},4000);


console.log("Tahsin");
console.log('Shifar');
console.log("Rayan");

