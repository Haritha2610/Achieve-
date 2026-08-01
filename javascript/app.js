
// 1. Positive, Negative, or Zero 
let num = -15;

if (num > 0) {
    console.log("Positive Number");
} else if (num < 0) {
    console.log("Negative Number");
} else {
    console.log("Zero");
}
console.log("--------------------------------------------");
// 2 .Largest of Two Numbers 

let a = 12, b = 25;
console.log("Largest Number:", a > b ? a : b);
console.log("--------------------------------------------");
// 3. Voting Eligibility 
let age = 19;
if (age >= 18) {
    console.log("Eligible to Vote");
} else {
    console.log("Not Eligible to Vote");
}
console.log("--------------------------------------------");
//4. Leap Year Checker 
let year = 2024;
if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}
console.log("--------------------------------------------");
//5. Grade Calculator 
let marks = 86;
if (marks >= 90) console.log("Grade: A");
else if (marks >= 80) console.log("Grade: B");
else if (marks >= 70) console.log("Grade: C");
else if (marks >= 60) console.log("Grade: D");
else console.log("Fail");
console.log("--------------------------------------------");

//6. Largest of Three Numbers
let x = 45, y = 78, z = 31;
let largest = Math.max(x, y, z);
console.log("Largest Number:", largest);
console.log("--------------------------------------------");

// 7. Simple Calculator
let num1 = 15, operator = "*", num2 = 4;
let result;
switch (operator) {
    case "+": result = num1 + num2; break;
    case "-": result = num1 - num2; break;
    case "*": result = num1 * num2; break;
    case "/": result = num1 / num2; break;
    default: console.log("Invalid Operator");
}
console.log("Result:", result);
console.log("--------------------------------------------");

//8. Character Type Checker
let ch = 'A';
if (/[A-Z]/.test(ch)) 
    console.log("Uppercase Letter");
else if (/[a-z]/.test(ch)) 
    onsole.log("Lowercase Letter");
else if (/[0-9]/.test(ch)) 
    console.log("Digit");
else 
    console.log("Special Character");
console.log("--------------------------------------------");

//9. Divisibility Checker
let n = 30;

if (n % 3 === 0 && n % 5 === 0)
    console.log("Divisible by both 3 and 5");
else if (n % 3 === 0)
    console.log("Divisible by 3");
else if (n % 5 === 0)
    console.log("Divisible by 5");
else
    console.log("Not divisible by 3 or 5");
console.log("--------------------------------------------");

//10. Electricity Bill Calculator

let units = 350;
let billAmount;

if (units <= 100) {
    billAmount = units * 1.2;
} else if (units <= 200) {
    billAmount = 100 * 1.2 + (units - 100) * 2;
} else {
    billAmount = 100 * 1.2 + 100 * 2 + (units - 200) * 3;
}

console.log("Electricity Bill:", billAmount);
console.log("--------------------------------------------");

// 11. BMI Category 
let weight = 70; // in kg
let height = 1.75; // in meters
let bmi = weight / (height * height);   
if (bmi < 18.5) {
    console.log("Underweight");
}
else if (bmi < 24.9) {
    console.log("Normal");
}   
else if (bmi < 29.9) {
    console.log("Overweight");
}       
else {
    console.log("Obese");
}   
console.log("--------------------------------------------");

// 12. Triangle Validator 
let a1 = 60, b1 = 70, c1 = 50;
if (a1 + b1 + c1 === 180) {
    console.log("Valid Triangle");
}
console.log("--------------------------------------------");
//13. Discount Calculator
let amount = 6000;
let discount=0;
if (amount >= 10000) 
    discount = 0.30;
else if (amount >= 5000) 
    discount = 0.20;
else if (amount >= 1000) 
    discount = 0.10;
let discountAmount = amount * discount;
let finalAmount = amount - discountAmount;

console.log("Discount:", discountAmount);
console.log("Final Amount:", finalAmount);
console.log("--------------------------------------------");
//14. Login Verification
let username = "admin";
let password = "12345";
if (username === "admin" && password === "12345") {
    console.log("Login Successful");
}
else if (username !== "admin") {
    console.log("Invalid Username");
}   
else if (password !== "12345") {
    console.log("Invalid Password");
}   
else {
    console.log("Invalid Credentials");
}   
console.log("--------------------------------------------");
// 15. ATM Withdrawal
let balance = 5000;
let withdraw = 1200;
if (withdraw % 100 !== 0) {
    console.log("Amount must be multiple of 100");
} else if (withdraw > balance) {
    console.log("Insufficient Balance");
} else if (balance - withdraw < 500) {
    console.log("Minimum balance of ₹500 required");
} else {
    balance -= withdraw;
    console.log("Withdrawal Successful. Remaining Balance:", balance);
}
console.log("--------------------------------------------");