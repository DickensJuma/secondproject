var x = 3; y = 2;
var result = Math.abs(x / y);
console.log(result.toFixed(14));

//if else if else
var mid = 25;
var high = 50;
var low = 1;
var current = 25;
var found = -1;
if (current < mid) {
    mid = (current - low) / 2;
} else if (current > mid) {
    mid = (current + high) / 2;
} else {
    found = current;
}
console.log(mid);



//factorial
var sum = 0;
for (var i = 1; i < 11; i++) {
    sum += i;
}
console.log(sum);

//sum of array elements
var num = [2, 4, 5, 6, 3];
var sum = 0;
for (var i = 0; i < num.length; ++i) {
    sum += num[i];

}
console.log(sum);

//factorial
function factorial(i) {
    var product = 1;
    for (var index = i; index >= 1; --index) {
        product *= index;

    } return product;
}
function factorial(i) {
    var product = 1;
    for (var i = i; i >= 1; --i) {
        product *= i;
    }
    return product;
}
console.log(factorial(4));


function my(arr, amt) {

    for (let i = 0; i < arr.length; i++) {
        arr[i] += amt;
    }
}
var num = [2, 3, 4, 5];
my(num, 3);
console.log(num); //[ 5, 6, 7, 8 ]

//assign 1-100 to an array
var nums = [];
for (let i = 0; i < 100; i++) {
    nums[i] = i + 1;
}
console.log(nums);

//sum of array element
var nums = [1, 2, 3, 4, 5];
var sum = 0;
for (let i = 0; i < nums.length; i++) {
    sum += nums[i]; //[ 1,2,3..100]
}
console.log(sum); //55

//creating an array fro string using .slip(" ") function.
var str = "i am a genious and woderfully make";
var words = str.split(" ");
for (let i = 0; i < words.length; i++) {
    console.log(`word  ${i}: ${words[i]}`);

}
var names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];
prompt("Enter a name to search for: ");
var name = readline();
var position = names.indexOf(name);
if (position >= 0) {
    console.log();
    ("Found " + name + " at position " + position);
}
else {
    console.log();
    (name + " not found in array.");
}

//converting arr to string using toString() and join() functions
var arr = ['apple', 'banana', 'orange'];
var tostring = arr.join();
console.log(tostring); //apple,banana,orange


//creazting array by combining two array using concat()
var arr1 =['mike','pato','george'];
var arr2 = ['elchapo', 'kip','stosh']
var arr3 =arr1.concat(arr2);
console.log(arr3);


//slice(3,3) delete 2 elements from index 3 
var itDiv = ["Mike","Clayton","Terrill","Raymond","Cynthia","Danny","Jennifer"];
var dmpDept = itDiv.splice(3,2);
console.log(dmpDept);

//adding an element at the end of the array
var num = [1,2,3,4,5];
 num.push(6);
console.log(num);

//adding an element at the start of the array
var num = [1,2,3,4,5];
 num.unshift(1);
console.log(num);


//removing an element from the end of an array
var num = [1,2,3,4,5];
 num.pop();
console.log(num);

//removing an element from the start of an array
var num = [1,2,3,4,5];
 num.shift();
console.log(num);