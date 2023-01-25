//ListNode

// class ListNode{
//     val;
//     next;
//     constructor(val,next){
//         this.val=val;
//         this.next=next;
//     }
// }

// class Testclass{
//     head;

//     constructor(head=null){
//         this.head=head;
//     }

//     //func 
//     haslast(){
//         return this.head!==null;
//     }

//     getlast(){
//         if(!this.haslast()){
//             return null;
//         }

//         let current =this.head;
//         while(current.next!==null){
//             current=current.next;
//         }
//         let finalvalue=current.val;

//         current=this.head;
//         while(current.next!=null && current.next.next!==null){
//             current=current.next;
//         }
//         if(current.next==null){
//             this.head=null;
//         }
//         current.next=null;
//         return finalvalue;
//     }

// }

// let myvar=new Testclass(
//     new ListNode(1,new ListNode(2,new ListNode(3, new ListNode(4, new ListNode(5)))))
// );
// console.log(myvar.getlast());





// promise:
//promise is a class in js
// constructor (func)
let num1=10;
let num2=20;
let mypromise=new Promise((fulfilled,notfulfilled)=>{
let sum=num1+num2;
if(sum>24){
    fulfilled();
}else{
    notfulfilled();
}
});
//.then() is called when promis is fulfilled else catch is called
// we cannot call both together
// promise.then().catch();

// mypromise.then(()=>{
// console.log("Promise is fulfilled");
// })
// .catch(()=>{
//     console.log("Promise is not fullfilled");
// });


function addtwonum(num1,num2){
    let sum=0;
    setTimeout(()=>{
        console.log(num1+num2);
        sum=num1+num2;
    },5000);
    console.log("Inside add:");
    return sum;
}
console.log(addtwonum(10,3));
//first it print 0 and after 5 sec it return sum i.e 13