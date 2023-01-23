// In javascript we can declare a variable in 3 ways
//1) const
//2) let
//3) var

const name="sanu";
console.log(name);

let myname="Raj";
console.log(myname);
// const and let are act as local variable

//var act as global variable
// var firstname="sanu";
// var lastname="Singh";
// var fullname=firstname+" "+lastname;
// console.log(fullname);



let firstname="Sanu";
let lastname="Singh";
let fullname=  `${firstname} ${lastname}`;
console.log(fullname);



//function to add two function
function sum(num1,num2){
    return num1+num2;
}

console.log(sum(2,5));


// arrow function
console.log("Arrow funct");
let addtwonum=(num1,num2)=>{
    return num1+num2;
};
// console.log(addtwonum(2,50));
// // this can be write as 
// let addtwonum=(num1,num2)=>num1+num2;
// console.log(addtwonum(2,50));


// another method of Default parameter
console.log("Default parameter");
function sum(num1,num2=10){
    console.log(num1);
    console.log(num2);
    return num1+num2;
}

console.log(sum(2));


// Rest and spread operator:
// applicable in array and obj n js
console.log("spread operator:");
let array=[10,20,0,40,50];
//spread operator -> ...

console.log(...array); // using spread
console.log(array);


// Rest -> ...
console.log("Rest operator:");
let maxoftwonumb=(num1,num2)=>Math.max(num1,num2);
let maxofthreenumb=(num1,num2,num3)=>Math.max(num1,num2,num3);

// for large numberss we cannot wite 
//use rest operator
let maxnum=(...numbers)=>{
    let maximum=Number.MIN_VALUE;
    for(let number of numbers){
        maximum=Math.max(maximum,number);
    }
    return maximum;
}
console.log(maxnum(1,2,3,4,5,6,88,100));



// objects
console.log("Objects: ");
let object={
    name:"sanu",
    age:22,
    city:"Gorakhpur",
};
// let obj2=object; // here referencing only
// to copy all data use spread oper
// let obj2={...object};
console.log(object);