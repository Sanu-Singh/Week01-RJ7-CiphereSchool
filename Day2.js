//arrays
 let array=[1,2,3,4,5];
 let newarr=[];
 // we have to print sqrt of array in new arr
 for(let i=0; i<array.length; i++){
   newarr[i]=array[i]*array[i];
 }
 console.log(newarr);


 //.map function
 console.log("Using mpa function");
 let arr=[5,10,12,15];
 function sqrtfun(ele){
    return ele*ele;
 }
 let newarray=arr.map(sqrtfun);
 console.log(newarray);


 // for each
 console.log("Using for each");
 let arr1=[1,2,3,4,5];
 arr1.forEach((element,index)=>{
    element*=element;
    console.log(element);
 });
 console.log("Arr1 is: ",arr1);
 // for each not modified the array


//.filter()
console.log("Using filter function");
// store only those ele which >3=0
let arr2=[10,20,30,40,50];
let newarr2=arr2.filter((element)=>element>=30);
console.log(newarr2);


//.find()
console.log("Using find function");
 //help to find certain type of value in array
 let arr3=[10,20,30,40,50];
 let temp=arr3.find((value)=>{
    return value >20;
 });
 console.log(temp);


 //.sort()
 console.log("Using sort function");
 let arr4=[10,99,14,55,71];
 let sortarr=arr4.sort();
 console.log(sortarr);

 // in javascript arrayis sorted in lexicographical order 
//  arr.sort() not always givecorrect output
let arr5=[10,99,14,55,71,111];
 let sortarr1=arr5.sort();
 console.log(sortarr1);
 //output=[ 10, 111, 14, 55, 71, 99 ]
//  so we use
console.log("Using comparator function");
let arr6=[10,99,14,55,71,111];
 let sortarr6=arr6.sort((ele1,ele2)=>{
    ele1=Number(ele1);
    ele2=Number(ele2);
    return ele1-ele2;
 });
 console.log(sortarr6);



 //Object Destructuring
 // make programming exp easier
 console.log("using Destrucutring");
 let myObj={
    name:"Sanu",
    age:22,
    address:{
        street:"Nandanagar",
        city:"Gorakhpur",
        ID:1201384,
    },
 };
 console.log(myObj.address.ID);
 // to read only name and age
 console.log(myObj.name,myObj.age);

 //array matching
//  console.log("Array matchiing");
//if(arr1==arr2)


//map and set
console.log("map");
let map=new Map();
map.set(1,"Sanu");
map.set(2,"Singh");
console.log(map);


//set
console.log("Set : ");
let set=new Set();
set.add(1);
set.add(10);
console.log(set);

//classcd

 class Animal{
    noOflegs;
    color;
    family;
    sound;
    // in js not create more then 1 constructor in one class
    constructor(noOflegs,color,family,sound){
      this.noOflegs=noOflegs;
      this.color=color;
      this.family=family;
      this.sound=sound;
    }
 }

 let animal=new Animal(4,"black_white","pet","mow");
 console.log(animal);