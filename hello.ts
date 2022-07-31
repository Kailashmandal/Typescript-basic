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

