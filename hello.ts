// typescript code gets complied into javascript code 

var fn=()=> 'response';

var fn = function(){
    return 'response';
}

// types in typescript
var a=10; // valid in ts and js

// but we can assign types in ts for a variable
var a : number; // now a can be only a number

a=20; // valid 
/**
 *  a="hey"  is invalid
 */

// a="hey";

// decalaring variable of different type 
var str : string ='hey kailash';// for storing charactors and string
var flag:boolean = false; // for storing true false
var bigInt : bigint = 9007199254740991n; // for big integer number

let num : number=10000;
console.log(num);
console.log(bigInt);


// var num:string;  can not redeclare the block scoped variable 
