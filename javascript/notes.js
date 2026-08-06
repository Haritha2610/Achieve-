//introduction to javscript
/*
highlevel language,Interpreted,dynamically typed programing language
primarily used to make web pages interactive
without js:
* weebsites are 
why js?

history:
1995-js-brenden eich
netscope

mocha-live script
Ecma=european computers manufactures association 
java-javascript

why it is called a scripting language
difference b/w java and javascript

mobile aps:vs code,
descktop-
server apps:
tensor flow:
iot
 where we can run js
 intialy - only crome,web bowser,firefox,edge
 server:
 mobile
 iot-
 client vs server side
cs
ss
javasript Enginees:
browser-48- google
edge
firefox



js
parser
ast
interpretere
macine code
cpu


ECMA-setting standard
java script should follow js versions:

important features:
syncronous

limitations:
cannot directly os files
read local files freely
acess heardware directly
replace system programming

js  environment
js engine
variables,datatypes,operataors,functions
browser:
borwser object oriented
document object orirntrd
timer APIS
fetch APIS
local stroge

node.js

file system
http server
path
os
stream
process

*/

//js syntax:
//rules that defines js must follow
//console.log("hello")
// node.js as runnig tool
//
// rules:
// case-sensitive ex:john,
// 
//key words:
//let:Can be updated but cannot be redeclared in the same scope
//
//js stmt and expressions
//a stmt tells js to perform an action
// let age=25;
// console.log(age);
//an expression returns the value always

//js comments:
//comments makes as code more readable & easier to understand
// two types of comments-single line & Multilines
// single line-
//multiple line-/*  */

// why do we use comments:
//explain logic
// improve readability
//
//keywords or Reserved keywords:
//spcl words with 
//
//identifiers:
//
// names are the identfiers-variables,constants,functions,classes etc
//
// let age=25;
// const PI=3.14;

//rules and convention
//
// rules:
// allowed characters

//naming convention
//variables and functions:
//camelCase:
// let My='amore'
// function calculateIntreset() {
//     console.log('object');
// }
//pascalCase
//class and consturctor functions
//
//boolean convections 
//haspermission=false;
//let isAdmin=true;

//memory Allocation:
//STACK MEMORY:PRIMETIVE TYPES
//HEAP MEMORY:OBJECT TYPES

//variables:
//A variable is a named container used to store data in a program. 
//The value stored in a variable can be changed during program execution.
//types
//var=global var
//
// let=local var
// let=Can be updated but cannot be redeclared in the same scope.
//
// const=local variable
// const=Cannot be updated or redeclared.

//strict mode:
// 'use strict';


//typescript:
// let name="   hari    ";
// console.log(name.trim().toUpperCase().padEnd(6,"4"));
//===============
//javascript Arrays: is a collection of ordered elements stored in a single variable.
//  Each element in an array has a numeric index, starting from 0. 
// Arrays can hold elements of different data types, including numbers, strings, objects, and even other arrays. 
//arrays are mutable
//arrays are objects
//arrays are dynamic
//arrays can hold different data types,multiple values in a single variable


// let students = ["hari", "ram", "shyam", "gita"];
// console.log(students[0]);

//Indexed-started from 0
//slicing allowed
//Array literal
// array constructor
// let students = new Array["hari", "ram", "shyam", "gita"];
// let rollNumbers = new Array[3, 2, 3, 4, 5];
// console.log(students[0]);
// console.log(rollNumbers[0]);
// let cart=[];
// console.log(cart);
// //let arr = new Array("Apple", "Banana", "Mango");
// console.log(arr);
// let arr = new Array(3);
// let srr=new arrray("apple,banana,cherry");
// arr[1] = "orange";
// console.log(arr); 

// let arr = new Array("Apple","banana","cherry");
// arr[2]=230;
// console.log(arr);

//add,remove,search,update ,sort,Reverse, filter, transfer
// array methods:

//push();-add
//pop();-delete
//unshift();
//shift();
//indexOf(cart);
//lastIndexOf()
//Includes
//JOIN()
//slice()
//splice(how many elements,what to be added) remove and add items at the same time
//concate()
//reverse()
//sort()
//forEach()
//Map()
//filter()
//find()
//findIndex()
//every()
//reduce()
//flat()
//flatMap()
//fill()


// let arr = ["Apple","Banana","cherry"];
// arr.push("orange");
// console. log(arr)

// let cart = ["Mobile","Charger","Laptop","charger","Mobile"]
// console.log(cart.sort());

// cart.splice(2,2,1, "MPL");
// console.log(cart);

// let permissions=[
// "READ",
// "WRITE",
// "DELETE"
// ];
// console.log(typeof permissions);
// let re = permissions.join(" ");
// console.log(typeof re);

// let cart =[1,2,3,4,5,6,7,8,9]
// console.log(cart.sort())
// console.log(cart.sort((a,b) => (b-a)));
// let b =[8,4,6,5,3,8,3,1]
// console.log(a.reverse().slice(0,5));
// console.log(b.reverse());


// let students=[
//     "hari", "ram", "shyam", "gita"

// ];
// students.forEach(student => {console.log(students);})
// let prices =[
//     100,200,400,];

//     // let gst = prices.map(price => price * 1.18);
//     let gst = prices.filter(price => price <300);;
//     console.log(gst);
// let nums=[
//     18,
//     22,
//     25,
//     9,
//     89
// ];
// // console.log(ages.every(age => age >= 18));
// let res = nums.reduce((Sum,num) => sum * num,1);
// console.log(res);
//============================
// javascript object:
// It is collection of related data stored in the form of keys and values
//key values must be immutable type
//values can be any valid js datatype 
//
// mutable
//heterogenous datatypes
// without Object

// let name="Hari";
// let age = 23
// let city = "MPL";

//with array;
let person={
    name="Hari",    age = 23,
    city = "MPL",
    rollno =195,
    course="BCA",
    category = "stats"
};

