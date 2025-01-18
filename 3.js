

#printing name and age

var name = "Bhavana v"
var age="23"
console.log(name)
console.log(age)

let name1="anusha"
let place="Thailand"
console.log(name1)
console.log(place)

var firstname="keerthana" ,lastname="raj", age= "23", martial="single", country="tarikere";
console.log(firstname,lastname,age,martial,country)

var firstname="bhavana"
var lastname="gowda"
age="23"
country="india"
console.log(firstname)
console.log(lastname)
console.log(age)
console.log(country)

// Declare variables and assign initial values
let myAge = 25;
let yourAge = 30;

console.log(`I am ${myAge} years old.`);
console.log(`You are ${yourAge} years old.`);


// Declare variables using var, let, and const
var varVar = "This is a var variable";
let letVar = "This is a let variable";
const constVar = "This is a const variable";

// Log their initial values to the console
console.log("var:", varVar);
console.log("let:", letVar);
console.log("const:", constVar);


// Declare variables and assign different data types
let stringValue = "Hello, World!"; // String
let booleanValue = true; // Boolean
let undefinedValue; // Undefined
let nullValue = null; // Null

// Declare a variable to represent whether you are a student
let isStudent = true;

// Log the values and their types to the console
console.log("String Value:", stringValue, "| Type:", typeof stringValue);
console.log("Boolean Value:", booleanValue, "| Type:", typeof booleanValue);
console.log("Undefined Value:", undefinedValue, "| Type:", typeof undefinedValue);
console.log("Null Value:", nullValue, "| Type:", typeof nullValue); 
console.log("Are you a student?", isStudent, "| Type:", typeof isStudent);


// Comments can make code readable

/*
Comments can make code readable, easy to use,
and informative
*/


// Declare a variable price with the value "100"
let price = "100";

// Convert price to a number and log the result
let priceAsNumber = Number(price);
console.log(priceAsNumber); 

// Convert price back to a string and log the result
let priceAsString = String(priceAsNumber);
console.log(priceAsString); 


// Declare variables for first name, last name, and favorite programming language
let firstName = "Bhavana";
let lastName = "Gowda";
let favoriteLanguage = "Operating Systems";

let message = `Hi, I'm ${firstName} ${lastName},\n\tand my favorite language is ${favoriteLanguage}.`;
console.log(message);

//Boolean
//True values

let a = 1;        
let b = "hello";  
let c = {};   

//False Value
let a = 0;         
let b = "";        
let c = null;  

console.log(4 > 3);    // true
console.log(4 >= 3);   // true
console.log(4 < 3);    // false
console.log(4 <= 3);   // false
console.log(4 == 4);   // true
console.log(4 === 4);  // true
console.log(4 != 4);   // false
console.log(4 !== 4);  // false
console.log(4 != '4'); // false (compares value, not type)
console.log(4 == '4'); // true (compares value, not type)
console.log(4 === '4'); // false (compares both value and type)

//Logical Operators
console.log(4 > 3 && 10 < 12);  // true
console.log(4 > 3 && 10 > 12);  // false
console.log(4 > 3 || 10 < 12);  // true
console.log(4 > 3 || 10 > 12);  // true
console.log(!(4 > 3));          // false
console.log(!(4 < 3));          // true
console.log(!(false));          // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === '4'));      // true


// Declare the variable with the input string
let company = 'Manipal School of Information Science';

// Print the length of the string
console.log(company.length);  // Output: 38

// Change all the string to capital letters using toUpperCase()
console.log(company.toUpperCase());  // Output: MANIPAL SCHOOL OF INFORMATION SCIENCE

// Change all the string to lowercase letters using toLowerCase()
console.log(company.toLowerCase());  // Output: manipal school of information science

//String
let company = 'Manipal School of Information Science';

// Slice out the first word
let firstWord = company.slice(0, company.indexOf(' '));
console.log(firstWord);  // Output: Manipal

//SUBSTR()
let company = 'Manipal School of Information Science';

// Substring out the first word
let firstWord = company.substr(0, company.indexOf(' '));
console.log(firstWord);  // Output: Manipal

//substring()
let company = 'Manipal School of Information Science';

// Substring out the first word
let firstWord = company.substring(0, company.indexOf(' '));
console.log(firstWord);  // Output: Manipal

//match()
let schl = 'Manipal School of Information Science';

//  find all occurrences of 'c' (case-sensitive)
let matches = schl.match(/a/g);  // 'g' for global search
console.log(matches);  // Output: [ 'a', 'a' ,'a']

//calculating income 

let text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

// Use a regular expression to extract all the numbers (including those for monthly income and bonuses)
let numbers = text.match(/\d+/g);  // \d+ matches all sequences of digits

// Convert the extracted numbers to integers
let monthlySalary = parseInt(numbers[0]);
let annualBonus = parseInt(numbers[1]);
let monthlyCoursesIncome = parseInt(numbers[2]);

// Calculate the total annual income
let totalAnnualIncome = (monthlySalary * 12) + annualBonus + (monthlyCoursesIncome * 12);

// Print the total annual income
console.log(totalAnnualIncome);  // Output: 240000


// Prompt the user to input a number and checks whether number is positive or negative
let userInput = prompt("Please enter a number:");

// Convert the input to a number
let number = parseFloat(userInput);


if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else if (number === 0) {
    console.log("The number is zero.");
} else {
    console.log("Invalid input. Please enter a valid number.");
}

// Prompt the user to input a day of the week and check whether its weekend or not
let day = prompt("Please enter a day of the week:");

// Convert the input to lowercase for case-insensitive comparison
day = day.toLowerCase();

// Use a switch statement to determine if it's a weekday or weekend
switch (day) {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
        console.log("It's a weekday.");
        break;
    case "saturday":
    case "sunday":
        console.log("It's a weekend.");
        break;
    default:
        console.log("Invalid input. Please enter a valid day of the week.");
}


//checking number is greater or lesser
let a = 4;
let b = 3;

if (a > b) {
    console.log(`${a} is greater than ${b}`);
} else {
    console.log(`${a} is less than ${b}`);
}

// usuage of for loop ..script to find all even numbers from 1 to 20

for (let i = 1; i <= 20; i++) {
    // Check if the number is even
    if (i % 2 === 0) {
        console.log(i);
    }
}
//usuage of while loop .. to print random numbers
let randomNum;
let numbers = [];  // Array to store generated numbers

// Use a while loop to generate random numbers until a number greater than 8 is generated
while (true) {
    randomNum = Math.floor(Math.random() * 10) + 1;  // Generates a random number between 1 and 10
    numbers.push(randomNum);  // Add the number to the array

    if (randomNum > 8) {
        break;  // Stop the loop if the generated number is greater than 8
    }
}

// Log all the generated numbers
console.log("Generated numbers:", numbers);

//printing triangle using #
// Loop from 1 to 7 to create the triangle
for (let i = 1; i <= 7; i++) {
    console.log('#'.repeat(i));  // Repeats the '#' symbol i times and logs it
}

//Function  Declaration
function greet(name) {
    return `Hii, ${name}!`;  // Returns the greeting message
}

// Test the function with three different names
console.log(greet('Keerthana'));  // Output: Hello, Keerthana!
console.log(greet('Anusha'));    // Output: Hello,Anusha!
console.log(greet('BHavana')); // Output: Hello, Bhavana!

// Recursive function to calculate factorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;  
    } else {
        return n * factorial(n - 1); 
    }
}

console.log(factorial(0));  // Output: 1
console.log(factorial(1));  // Output: 1
console.log(factorial(5));  // Output: 120
console.log(factorial(7));  // Output: 5040





























