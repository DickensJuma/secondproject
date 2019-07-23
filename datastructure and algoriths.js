/*while loop
When we want to execute a set of statements while a condition is true,
 we use a while loop*/
var numb = 2
var sum = 1
while (numb < 11) {
   sum += numb;
   ++numb; 
    
}
console.log(sum);

/*When we want to execute a set of statements a specified number of times, we use a for
loop. uses a for loop to sum the integers 1 through 10.
 Summing integers using a for loop*/
var number = 1;
var sum = 0;
for (var number = 1; number < 11; number++) {
sum += number;
}
console.log(sum);

/*for loops are also used frequently to access the elements of an array, as shown in
 Using a for loop with an array*/
var numbers = [3, 7, 12, 22, 100];
var sum = 0;
for (var i = 0; i < numbers.length; ++i) {
sum += numbers[i];
}
print(sum); // displays 144

//recursion
function factorial(number) {
   if (number == 1) {
   return number;
   }
   else {
   return number * factorial(number-1);
   }
   }
   console.log(factorial(5));

   Example 1-12. Defining and using the Checking object
function Checking(amount) {
this.balance = amount;
this.deposit = deposit;
this.withdraw = withdraw;
this.toString = toString;
}
function deposit(amount) {
this.balance += amount;
}
function withdraw(amount) {
if (amount <= this.balance) {
this.balance -= amount;
}
if (amount > this.balance) {
console.log("Insufficient funds");
}}
function toString() {
return "Balance: " + this.balance;
}
var account = new Checking(500);
account.deposit(1000);
print(account.toString()); // Balance: 1500
account.withdraw(750);
print(account.toString()); // Balance: 750
account.withdraw(800); // displays "Insufficient funds"
print(account.toString()); // Balance: 750

//ARRAY
//Creating Arrays
//The simplest way to create an array is by declaring an array variable using the [] oper‐ator:

var numbers = [];

/*When you create an array in this manner, you have an array with length of 0. You can
verify this by calling the built-in length property:*/
print(numbers.length); // displays 0

//Another way to create an array is to declare an array variable with a set of elements
//inside the [] operator:
var numbers = [1,2,3,4,5];
print(numbers.length); // displays 5

//You can also create an array by calling the Array constructor:
var numbers = new Array();
print(numbers.length); // displays 0

//You can call the Array constructor with a set of elements as arguments to the constructor:
var numbers = new Array(1,2,3,4,5);
print(numbers.length); // displays 5
//Finally, you can create an array by calling the Array constructor with a single argument
//specifying the length of the array:
var numbers = new Array(10);
print(numbers.length); // displays 10
//Unlike many other programming languages, but common for most scripting languages,
//JavaScript array elements do not all have to be of the same type:
var objects = [1, "Joe", true, null];
//We can verify that an object is an array by calling the Array.isArray() function, like
//this:
var numbers = 3;
var arr = [7,4,1776];
print(Array.isArray(number)); // displays false
print(Array.isArray(arr)); // displays true


function ist(str) {
   if (str.indexOf("cie") > -1) {
      return true;
   }
   return false;
}
var words = ["recieve","deceive","percieve","deceit","concieve"];
var s = words.filter(ist);
console.log(s);



