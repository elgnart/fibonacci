// ##Fibonacci calculator##

// You need to implement Fibonacci number calculator in JavaScript. You should be able to change the index. The Fibonacci sequence follows those rules:

// The first two numbers of the sequence are 0 and 1,
// Each subsequent number is the sum of the previous two.

// **Example:** 
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...

// Input:
// 3

// Output:
// 2

// (*Extra credit:* Try to solve the problem by using recursion.)



// function fib(n)
// {
// 	var a = 0;
// 	var b = 1;


// 	if (n<=2){
// 		return 1;
// 	}else

// 	return fib(n-1) + fib(n-2);
// }

// document.write(fib());


var question = prompt("Enter #");
var a=0;
var b=1;
var c;

for (var i=1; i<=question; i++){
	c=a+b;
	a=b;
	b=c;
}
	document.write (c);


// var a = prompt("enter number");
// var i;
// var fib = [];

// fib[0] = 0;
// fib[1] = 1;
// for(i=2; i<=a; i++)
// {

//     fib[i] = fib[i-2] + fib[i-1];
//     document.write(fib[a]);
// }