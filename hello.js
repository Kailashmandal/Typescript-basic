// typescript code gets complied into javascript code 
var fn = function () { return 'response'; };
var fn = function () {
    return 'response';
};
// types in typescript
var a = 10; // valid in ts and js
// but we can assign types in ts for a variable
var a; // now a can be only a number
a = 20; // valid 
/**
 *  a="hey"  is invalid
 */
// a="hey";
// decalaring variable of different type 
var str = 'hey kailash'; // for storing charactors and string
var flag = false; // for storing true false
var bigInt = 9007199254740991n; // for big integer number
var num = 10000;
console.log(num);
console.log(bigInt);
// var num:string;  can not redeclare the block scoped variable 
