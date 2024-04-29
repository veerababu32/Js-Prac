// Regular expressions example

const form = document.querySelector("#form");
const inputNum = document.querySelector("#phone");
const resultNum = document.querySelector("#result");

const myRe = /^(?:\d{3}|\(d{3}\))([-/.])\d{3}\1\d{4}$/;

function testInfo(inputNum) {
    const check = myRe.exec(inputNum.value);

    resultNum.textContent = check ? `Thanks, your phone number is ${check[0]}` : `${inputNum.value} isn't a phone number with area code!`;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    testInfo(inputNum);
});

// const myRe = new RegExp("d(b+)d", "g");
// const myArray = myRe.exec("cdbbdbsbz");
// console.log(myArray);



// URL Instance methods

const myUrl = new URL("https://google.com/?name=veer&num=32");

console.log(myUrl);
console.log(myUrl.href);    //myUrl.toString()
console.log(myUrl.search);
console.log(myUrl.searchParams.get("name"));
myUrl.searchParams.set("city", "pune");
console.log(myUrl.toString());

// It won't change the original url
const Params = new URLSearchParams(myUrl.search);
console.log(`Query string (beforeee):\t ${Params}`);
Params.delete("city","pune");
console.log(`Query string (afterr):\t ${Params}`);
// console.log(myUrl);
myUrl.searchParams.delete("city");
console.log(myUrl);


// 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

let date = new Date("2011-04-20T23:30:51.01");
const dayNames = ["Sunday", "Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday"];
let hours = date.getHours();

let ampm = hours <= 12 ? "AM" : "PM"

if(hours > 12) {
    hours -= 12;
}

console.log("Today is: " + dayNames[date.getDay()]);
console.log("Current time is : " + hours + " " + ampm + " : " + date.getMinutes() + " : " + date.getSeconds())

// 2. Write a JavaScript program to print the current window contents.

console.log(this.window);

// 3. Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

console.log(date.getMonth() + "-" + date.getDate() + "-" + date.getUTCFullYear());


// 4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7

let s1 = 5, s2 = 6, s3 = 7;
const semiPera = (s1 + s2 + s3) / 2;
const areaOfTri = semiPera * (semiPera - s1) * (semiPera - s2) * (semiPera - s3);
console.log(Math.sqrt(areaOfTri)); //14.697


// 5. Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.

const qwerty = "w3resource";

for (i in qwerty) {
    console.log(qwerty);
}

// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

const year = date.getFullYear();

function leapYear(year) {
    if(0 !== year % 4 && 0 === year % 400 || 0 === year % 100){
        console.log(year + ' Leap year.');
    } else {
        console.log(year + ' not a Leap year.');
    }

    return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}

console.log(leapYear(year));

const is_leapyear = year => new Date(year, 1, 29) === 1;

console.log(is_leapyear(2016));
console.log(is_leapyear(1900));

// 7. Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.

for (let year = 2014; year <= 2050; year++) {
    const date = new Date(year,1,1);
    if (date.getDay() === 0) {
        console.log('1st Jan of ' + year + ' is sunday.')
    }
}

// 8. Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".

const guessNum  = document.getElementById("firstInput");
let Result = document.getElementById("value");

function check() {
    let num = Math.floor((Math.random() * 10) + 1);
    if (Number(guessNum.value) === num) {
        Result.innerHTML = 'Matched!';
    } else {
        Result.innerHTML = "Not Matched!";
    }
}


// 9. Write a JavaScript program to calculate the days left before Christmas.

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// const year = date.getFullYear();

// const is_leapyear = year => year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
const daysOfFeb = is_leapyear(year) ? 29 : 28;

let totalDaysInYear = 31 + daysOfFeb;

for (let i = date.getMonth(); i <= 9; i++) {
    // console.log(month[i]);
    if (i <= 4) {
        const firstHalf = (i + 2) % 2 == 0 ? 31 : 30;
        totalDaysInYear += firstHalf;
    } else {
        const secondHalf = (i + 2) % 2 == 0 ? 30 : 31;
        totalDaysInYear += secondHalf;
    }
}

const daysLeftToChristmas = totalDaysInYear - (date.getDate() + 5);

console.log(daysLeftToChristmas + ' days left to christmas!');

// 10. Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).

const firstInp  = document.getElementById("firstInput");
const secondInp = document.getElementById("secondInput");
let result = document.getElementById("value");

function multiply() {
    result.innerHTML = firstInp.value * secondInp.value;
}

function divide() {
    result.innerHTML = firstInp.value / secondInp.value;
}

// 11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C

let Temp = 0;
function convertTemp(temp) {
    if(temp.slice(-1) === "C") {
        temp = temp.slice(0, -1);
        Temp += (Number(temp) * 9/5) + 32;
        console.log(temp + '\xB0C is ' + Temp + ' \xB0F.');
    } else {
        temp = temp.slice(0, -1);
        Temp += (Number(temp) - 32) * 5/9;
        console.log(temp + '\xB0F is ' + Temp + ' \xB0C.');
    }
}
convertTemp("45F");

// 12. Write a JavaScript program to get the website URL (loading page).

const myURL = window.origin || document.URL;
console.log(myURL);

// 13. Write a JavaScript exercise to create a variable using a user-defined name.

const user = 'veeru';
const n = 32;
this[user] = n;
console.log(this[user]);

// 14. Write a JavaScript exercise to get the filename extension.

const file = document.getElementById("fileUploader");

document.getElementById('check').addEventListener("click", function() {
    // console.log(file.value, 'file');
    console.log(file.files); //gives the file obj
    if(file.files.length > 1) {
        for(let i = 0; i <= file.files.length; i++) {
            console.log(file.files[i].type);
        }
    } else {
        console.log(file.files[0].type);
    }
})

// document.getElementById('fileUploader').addEventListener("onchange", function() {
//     console.log(file, 'file');
// })

// 15. Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.

function diff(num) {
    return num <= 13 ?  13 - num : (num - 13) * 2;
}

console.log(diff(16));
console.log(diff(13));

// 16. Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.

function sum(x, y) {
    if(x === y) {
        return (x + y) * 3;
    } else {
        return x + y;
    }
}

console.log(sum(2, 5));
console.log(sum(2, 2));

// 17. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19.

function diffNum(num) {
    return num > 19 ? (num - 19) * 3 : (19 - num);
}

console.log(diffNum(20));
console.log(diffNum(12));

// 18. Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.

function pairOfNum(x, y) {
    return (x + y) === 50 || x === 50 || y === 50 ? 'true' : 'false';
}

console.log(pairOfNum(10, 40));

// 20. Write a JavaScript program to check two given integers whether one is positive and another one is negative.

function twoNums(a, b) {
    return (a > 0 || b > 0) && (a < 0 || b < 0);
}

console.log(twoNums(-1, 2));

// 21. Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.

function addPrefix(str) {
    if(str.slice(0, 2) === "Py") {
        return str;
    } else {
        return "Py" + str;
    }
}

console.log(addPrefix('veera'));
console.log(addPrefix('Python'));

// 22. Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.

function modifiedStr(str, num) {
    if(num > 0) {
        console.log(str.slice(0, num) + str.slice(num + 1));
    } else {
        console.log(str.slice(num + 1));
    }
}

modifiedStr("hello", 0);

// 24. Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.

const addingChar = (str) => str.slice(0, 1) + str + str.slice(-1);

console.log(addingChar("Python"));

// 25. Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.

const isMultipleOf3and7 = (num) => num > 0 ? num % 3 === 0 || num % 7 === 0 : 'false';

console.log(isMultipleOf3and7(14));

// 26. Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.

const adding3Char = (str) => str.length >= 3 ? str.slice(-3) + str + str.slice(-3) : 'str need atleast 3 chars!';

console.log(adding3Char('hehee'));
console.log(adding3Char('as'));

// 27. Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.

const checkStr = (str) => str.length >=4 ? str.slice(0, 4) === "Java" : 'false'

console.log(checkStr('JavaScript'));
console.log(checkStr('Pyt'));

// 28. Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range.
// 29. Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the specified range

function checkNumInBetween50and99 (x, y, val) {
    if (val)
        return (x >= 50 && x <= 99) && (y >= 50 && y <= 99);
    else
        return (x >= 50 && x <= 99) || (y >= 50 && y <= 99);
}

console.log(checkNumInBetween50and99(50, 60, true));
console.log(checkNumInBetween50and99(50, 20, false));

// 30. Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one.

function isStrHavingScriptOrNot(str) {
    if(str.slice(4) === "Script") {
        return str.slice(0, 4);
    } else  {
        return str;
    }
}

console.log(isStrHavingScriptOrNot("JavaScript"));

// 31. Write a JavaScript program to find the largest of three given integers.

function largestOfThreeNum(a,b,c) {
    if(a > b && a > c) {
        return a;
    } else if(b > c && b > a) {
        return b;
    } else if(c > a && c > b) {
        return c;
    }
}

console.log(largestOfThreeNum(12, 15, 2));

// 32. Write a JavaScript program to find the closest value to 100 from two numerical values.

function closestValue(x, y) {
    if((x <= 100 && x > 90) && (y <= 100 && y > 90)) {
        console.log('Both are near to 100');
    } else if(y <= 100 && y > 90) {
        console.log('y is near to 100', y);
    } else if(x <= 100 && x > 90) {
        console.log('x is near to 100', x);
    } else {
        console.log('Nothing is near to 100');
    }
}

closestValue(95, 95);

// 33. Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.

function isTwoNumInRange(x, y) {
    return (((x >= 40 && x <= 60) && (y >= 40 && y <= 60)) || ((x >= 70 && x <= 100) || (y >= 70 && y <= 100)))
}

console.log(isTwoNumInRange(70, 40));

// 34. Write a JavaScript program to find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive.

function largestOfTwoNum(x, y) {
    if ((x >= 40 && x <= 60) && (y >= 40 && y <= 60))
        if (x === y)
            return "Both are same.";
        else if(x > y)
            return x;
        else
            return y;
    else
        return false;
}

console.log(largestOfTwoNum(60, 50));

// 35. Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string.

function specifiedChar(str, char) {
    let res = 0;
    for (let i = 0; i < str.length; i++) {
        if((str.charAt(i) === char) && (i >= 1 && i <= 3)) {
            res = 1;
            break;
        }
    }

    if (res == 1) return true;
    return false;
}

console.log(specifiedChar("nature", 't'));

// 36. Write a JavaScript program that checks whether the last digit of three positive integers is the same.

function lastDigitOfThreeNums(x, y, z) {
    if(x > 0 && y > 0 && z > 0){
        if((String(x).slice(-1) === String(y).slice(-1)) && (String(x).slice(-1) === String(z).slice(-1))) {
            return true;
        }
    }
    return false;
}

console.log(lastDigitOfThreeNums(10, 20, 31));

// 37. Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case.

const changeFirst3CharsInStr = (str) => str.length > 3 ? str.slice(0, 2).toLowerCase() + str.slice(2) : str.toUpperCase();

console.log(changeFirst3CharsInStr('Veera'));
console.log(changeFirst3CharsInStr('let'));

// 39. Write a JavaScript program to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80.

function computeSumOfTwoNums(x, y) {
    let z = x + y;
    if(z >= 50 && x <= 80)
        return 65;
    else
        return 80
}

console.log(computeSumOfTwoNums(20, 420));

// 40. Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.

function isEight(x, y) {
    if(x === 8 || y === 8) {
        return true;
    }

    if(x + y === 8 || Math.abs(x - y) === 8) {
        return true;
    }

    return false;
}


console.log(isEight(2, 6));

// 41. Write a JavaScript program to check a set of three numbers; if the three numbers are the same return 30; otherwise return 20; and if two numbers are the same return 40.

function setOfThreeNums(x, y, z) {
    if(x === y && x === z) {
        return 30;
    } else if(x === y || x === z) {
        return 40;
    } else {
        return 20;
    }
}

console.log(setOfThreeNums(10, 20, 30));

// 43. Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.

const rightmostDigit = (x, y, z) => (x % 10 === y % 10) || (y % 10 === z % 10) || (z % 10 === x % 10);

console.log(rightmostDigit(30, 13, 24));

// 45. Write a JavaScript program that checks two integer values and returns true if either one is 15 or if their sum or difference is 15.

function isFifteen(x, y) {
    if (x === 15 || y === 15)
        return true;

    if ((x + y === 15) || Math.abs(x - y) === 15)
        return true;

    return false;
}

console.log(isFifteen(2, 15));

// 46. Write a JavaScript program to check two given non-negative integers if one (not both) is a multiple of 7 or 11.

function valCheck(x, y) {
    if(!((x % 7 === 0 || x % 11 === 0) && (y % 7 === 0 || y % 11 === 0)))
        return ((x % 7 === 0 || x % 11 === 0) || (y % 7 === 0 || y % 11 === 0));
    else
        return false;
}

console.log(valCheck(12, 2));

// 47. Write a JavaScript program to check whether a given number exists in the range 40..10000.
// For example 40 presents in 40 and 4000.

const checkNumInBetween40and10000 = (num) => num >= 40 && num <= 10000;

console.log(checkNumInBetween40and10000(2));

// 48. Write a JavaScript program to reverse a given string.

function reverseAStr(str) {
    let res = '';
    for(let i = 1; i <= str.length; i++) {
        res += str.at(-i);
    }
    return res;
}

console.log(reverseAStr('Hello'));

// 49. Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.

// let name = 'zveeru';
// console.log(name.charCodeAt(0));

// 50. Write a JavaScript program to capitalize the first letter of each word in a given string.

const capitalizeFirstLetter = (str) => str.slice(0,1).toUpperCase() + str.slice(1);

console.log(capitalizeFirstLetter("veeru"));

// 51. Write a JavaScript application that transforms a provided numerical value into hours and minutes.

// 54. Write a JavaScript program to count the number of vowels in a given string.

function countNumOfVowels(str) {
    const vowels = 'aeiou';
    let vowelsCount = 0;
    for(let i of str){
        for (let j of vowels) {
            if(i === j) {
                vowelsCount += 1;
            }
        }
    }
    return vowelsCount > 0 ? vowelsCount : 'No Vowels are present!';
}

const countVowels = (str) => str.replace(/[^aeiou]/g, '').length;

console.log(countNumOfVowels('veeru'));
console.log(countVowels('qwerty'));

// 55. Write a JavaScript program to check whether a given string contains an equal number of p's and t's.

function equalNumOfpandt(str) {
    let p = 0, t = 0;
    for(let i of str) {
        if (i === 'p') {
            p += 1;
        }
        if (i === 't') {
            t += 1;
        }
    }
    return p > 0 && t > 0 ? p === t : false;
}

const equalPT = (str) => str.replace(/[^p]/g, '').length === str.replace(/[^t]/g, '').length;

console.log(equalNumOfpandt('laptop'));
console.log(equalPT('potpott'));

// 59. Write a JavaScript program to extract the first half of a even string.

const firstHalf = (str) => str.length % 2 === 0 ? str.slice(0, str.length / 2) : str;

console.log(firstHalf('veeru'));
console.log(firstHalf('veer'));

// 60. Write a JavaScript program to create a new string without the first and last characters of a given string.

const withoutFirstandLastChar = (str) => str.slice(1, str.length - 1);

console.log(withoutFirstandLastChar('python'));

// 61. Write a JavaScript program to concatenate two strings except for their first character.

const exceptFirstChar = (a, b) => a.substring(1) + b.substring(1);

console.log(exceptFirstChar('hey', 'bhooo'));

// 62. Write a JavaScript program to move the last three characters to the start of a given string. The string length must be greater than or equal to three.

const lastThreeChartoFirst = (str) => str.length > 3 ? str.slice(str.length - 3, str.length) + str.slice(0, str.length - 3) : str;

console.log(lastThreeChartoFirst('veeraBabu'));

// 63. Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater than or equal to three.

const middleThreeChar = (str) => {
    let len = str.length;
    if(len % 2 == 1 && len > 3) {
        return str.slice(len % 2, -len % 2);
    }
    return str;
}

console.log(middleThreeChar('veeru'));

// 64. Write a JavaScript program to concatenate two strings and return the result. If the length of the strings does not match, then remove the characters from the longer string.

const concatenateTwoStrings = (a, b) => {
    if(a.length === b.length)
        return a + b;
    else if(a.length > b.length)
        return a.slice(0, b.length) + b;
    else if(b.length > a.length)
        return a + b.slice(0, a.length);
}

console.log(concatenateTwoStrings('veer', 'maths'));

// 65. Write a JavaScript program to test whether a string ends with "Script". The string length must be greater than or equal to 6.

const endsWithScriptorNot = (str) => str.length >= 6 ? str.slice(-6) === "Script" : str;

console.log(endsWithScriptorNot('Scripvt'));

// 66. Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.

const cityNames = (str) => str.slice(0, 3) === "Los" || str.slice(0, 3) === "New" ? str : '';

console.log(cityNames('LosAngeles'));

// 67. Write a JavaScript program to create a new string from a given string. This program removes the first and last characters of the string if the first or last character is 'P'. Return the original string if the condition is not satisfied.

const removeFirstandLastifP = (str) => {
    let start = 0, end = str.length;
    if (str.slice(0, 1).toLowerCase() === 'p')
        start++;
    if (str.slice(-1).toLowerCase() === 'p')
        end--;

    return str.substring(start, end);
}

console.log(removeFirstandLastifP('programp'));

// 69. Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.

const numArr = [10, 20, 32];
let sumOfThree = 0;

for(let i = 0; i < numArr.length; i++) {
    sumOfThree += numArr[i];
}

console.log(sumOfThree);

// 70. Write a JavaScript program to rotate the elements left in a given array of integers of length 3.

function rotateElements(arr) {
    arr.push(arr.shift());
    return arr;
}

console.log(rotateElements(numArr));

// 71. Write a JavaScript program to check whether 1 appears in the first or last position of a given array of integers. The array length must be larger than or equal to 1.

const isOneinFirstorLast = (arr) => arr.length >= 1 && (arr[0] === 1 || arr[arr.length - 1] === 1);

console.log(isOneinFirstorLast([3, 2, 3]));

// 72. Write a JavaScript program to check whether the first and last elements are the same in a given array of integers of length 3.

const firstAndLastAreSame = (arr) => arr.length >= 3 ? arr[0] === arr[arr.length - 1] : 'Array length should be 3';

console.log(firstAndLastAreSame([10, 20, 32, 10]));

// 73. Write a JavaScript program to reverse the elements of a given array of integers of length 3.

const reverseThree = (arr) => {
    return arr.map((value, index, arr) => arr[(arr.length - 1) - index]);
}

console.log(rotateElements(['veera', 'babu', 'T', 'Hi']));
console.log(reverseThree(['hello', 'hi', 'hey', 'boo']));

// 75. Write a JavaScript program to create an array taking the middle elements of the two arrays of integer and each length 3.

const middleEleOfTwoArr = (arr1, arr2) => {
    const arr3 = [];
    arr3.push(arr1[1], arr2[1]);
    return arr3
}

const arr1 = [1, 2, 3], arr2 = [4, 5, 6];

console.log(middleEleOfTwoArr(arr1, arr2));

// 76. Write a JavaScript program to create an array by taking the first and last elements from a given array of integers. The length must be larger than or equal to 1.

const takeFirstAndLastInt = (arr) => {
    let newArr = [];
    if (arr.length > 1)
        newArr.push(arr[0], arr[arr.length - 1]);
    else
        newArr = arr;

    return newArr;
}

console.log(takeFirstAndLastInt(arr1));

// 77. Write a JavaScript program to test whether an array of integers of length 2 contains 1 or 3.

const isArrContains1or3 = (arr) => (arr[0] === 1 || arr[1] === 1) || (arr[0] === 3 || arr[1] === 3);

var newArr = [1, 3]
console.log(isArrContains1or3(newArr));

// 78. Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or 3.

// const isArrDoesNotContains1or3 = (arr) => {
//     return (arr[0] != 1 || arr[0] != 3) || (arr[1] != 0 || arr[1] != 3)
// };

// console.log(isArrDoesNotContains1or3(newArr));
// console.log(isArrDoesNotContains1or3([2, 3]));