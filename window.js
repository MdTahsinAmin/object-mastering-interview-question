// global variable access everywhere

let name = "tahsin";

function add(num1 , num2){
    // if you don't use any key as var , let , const so this  variable is one kind of 
    // global variable and you can use before function call   
    // also use window.result
     result  = num1 + num2;

    return result;
}

console.log(name);

// this statement you give a error

//console.log(result);
let sum = add(10,14);

console.log(sum);
// that is perfect because add function called perviously so result is visible 
//
console.log(result);

// window is => javascript running environment 