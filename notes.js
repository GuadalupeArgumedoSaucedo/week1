var num1 = 1; 
var num2 = 1; 
var num3 = 1; 
// one way to increment a number 
num1 = num1 + 1; 
// another way to increment a number 
++num2;  
// pre-increment 
// a third way to increment a number 
num3++;  
// post-increment 

var x = 5; 
var y; 
// when you use pre-increment, it does the increment first 
// before the other operators 
y = ++x; 
// increment x first (now x is 6) 
// then assign x to y (so y is 6 too) 

var x = 5; 
var y; 
// when you use post-increment, it does the increment after 
// the other operators 
y = x++; 
// first assign x to y (so y is 5) 
// then increment x (so x is 6)

var num = 5;
--num; // num is now 4 
num--; // num is now 3 
// no apparent difference between them 

var x = 5; 
var y; 
// when you use pre-decrement, it does the decrement first 
// before the other operators 
y = --x; 
// decrement x first (now x is 4) 
// then assign x to y (so y is 4 too) 

var x = 5; 
var y; 
// when you use post-decrement, it does the decrement after 
// the other operators 
y = x--; 
// first assign x to y (so y is 5) 
// then decrement x (so x is 4) 

for (var i = 1; i <= 10; i++) { 
} 

var x = 5; 
var y; 
y = x;

var onHand = 10; 
var qtyReceived = 6; 
onHand += qtyReceived; 

