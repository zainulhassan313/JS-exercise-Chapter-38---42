// 1. Write a custom function power ( a, b ), to calculate the value of a raised to b.//

//Answer//

function power(a, b) {

    let result = 1;

    for (let i = 0; i < Math.abs(b); i++) {
        result *= a;
    }

    if (b < 0) {
        result = 1 / result;
    }

    return result;
  

}

console.log(power(2, 3)); 
console.log(power(5, -2)); 
console.log(power(3, 0));

// 2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.//

// Answer//

function isLeapYear(year) {
   
    
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;  
    } else {
        return false; 
    }
    
}

console.log(isLeapYear(2024));  
console.log(isLeapYear(2023));  
console.log(isLeapYear(2000));  
console.log(isLeapYear(1900));  


// 3. If the lengths of the sides of a triangle are denoted by a, b, andc, then area of triangle is given by area = S(S − a)(S − b)(S − c) where, S = ( a + b + c ) / 2 Calculate area of triangle using 2 functions//

//Answer//

function calculateSemiPerimeter(a, b, c) {
    return (a + b + c) / 2;
  }
  
  
  function calculateArea(a, b, c) {
    const S = calculateSemiPerimeter(a, b, c);
    return Math.sqrt(S * (S - a) * (S - b) * (S - c));
  }
  
 
  const a = 5;
  const b = 6;
  const c = 7;
  
  const area = calculateArea(a, b, c);
  console.log("Area of the triangle: " + area);
  

//4. Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these marks. there should be 3 functions one is the mainFunction and other are for average and percentage. Call those functions from mainFunction and display result in mainFunction.//

//Answer//

function calculateAverage(marks1, marks2, marks3) {
    const totalMarks = marks1 + marks2 + marks3;
    return totalMarks / 3;
  }
  
  
  function calculatePercentage(marks1, marks2, marks3) {
    const totalMarks = marks1 + marks2 + marks3;
    const percentage = (totalMarks / 300) * 100; 
    return percentage;
  }
  
  
  function mainFunction() {
    
    const marks1 = 75;
    const marks2 = 85;
    const marks3 = 90;
    
    
    const average = calculateAverage(marks1, marks2, marks3);
    const percentage = calculatePercentage(marks1, marks2, marks3);
    
    
    console.log("Average Marks: " + average);
    console.log("Percentage: " + percentage + "%");
  }
  
 
  mainFunction();

  
  //5. You have learned the function indexOf. Code your own custom function that will perform the same functionality. You can code for single character as of now.//

  //Answer//

  
function customIndexOf(str, char) {
   
    for (let i = 0; i < str.length; i++) {
      
      if (str[i] === char) {
        return i;
      }
    }
    
    return -1;
  }
  
  
  const str = "Hello, World!";
  const charToFind = "o";
  
  const index = customIndexOf(str, charToFind);
  console.log("The index of character '" + charToFind + "' is: " + index);

  
  //6. Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long.  

  //Answer

function removeVowels(sentence) {

    const vowels = /[aeiouAEIOU]/g;
    
    
    return sentence.replace(vowels, '');
  }
  
  
  console.log("Sentence after removing vowels: " + result);

//7. Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text. For example, in the sentence “Pleases read this application and give me gratuity” Such occurrences are ea, ea, ui.  
  
//Answer


function countConsecutiveVowels(sentence) {
    
    const vowels = "aeiouAEIOU";
    
    
    let count = 0;
    

    for (let i = 0; i < sentence.length - 1; i++) {
      
      const currentChar = sentence[i];
      const nextChar = sentence[i + 1];
  
      
      switch (true) {
        case vowels.includes(currentChar) && vowels.includes(nextChar):
          count++; 
          break;
        default:
          break;
      }
    }
  
    return count;
  }
  
  
  console.log("Number of consecutive vowel pairs: " + result);

  //8. The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this distance in meters, feet, inches and centimeters.
  
  //Answer

  
function convertToMeters(km) {
    return km * 1000;
  }
  
  
  function convertToFeet(km) {
    return km * 3280.84;
  }
  
  
  function convertToInches(km) {
    return km * 39370.1;
  }
  
  
  function convertToCentimeters(km) {
    return km * 100000;
  }
  

  function mainFunction() {
    
    const km = parseFloat(prompt("Enter the distance between the cities in kilometers:"));
    
    
    const meters = convertToMeters(km);
    const feet = convertToFeet(km);
    const inches = convertToInches(km);
    const centimeters = convertToCentimeters(km);
  
    
    console.log(`Distance in meters: ${meters} m`);
    console.log(`Distance in feet: ${feet} ft`);
    console.log(`Distance in inches: ${inches} in`);
    console.log(`Distance in centimeters: ${centimeters} cm`);
  }
  
  
  mainFunction();
  

//9. Write a program to calculate overtime pay of employees. Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours. Assume that employees do not work for fractional part of an hour.

//Answer


function calculateOvertimePay(hoursWorked) {
    const regularHours = 40;
    const overtimeRate = 12; 
  

    if (hoursWorked > regularHours) {
      const overtimeHours = hoursWorked - regularHours;
      const overtimePay = overtimeHours * overtimeRate;
      return overtimePay;
    } else {
      return 0; 
    }
  }
  
  
  function mainFunction() {
    
    const hoursWorked = parseInt(prompt("Enter the total hours worked by the employee:"));
  
    
    const overtimePay = calculateOvertimePay(hoursWorked);
  
    
    if (overtimePay > 0) {
      console.log(`The employee worked ${hoursWorked - 40} overtime hours. Overtime pay: Rs. ${overtimePay}`);
    } else {
      console.log("No overtime pay. Employee worked within regular hours.");
    }
  }
  
  
  mainFunction();

  
  //10. A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the withdrawer.

  //Answer

  
function calculateCurrencyNotes(amountInHundreds) {
    const totalAmount = amountInHundreds * 100;  
  
    
    const hundredNotes = Math.floor(totalAmount / 100);
    const remainingAfterHundred = totalAmount % 100;
  
    const fiftyNotes = Math.floor(remainingAfterHundred / 50);
    const remainingAfterFifty = remainingAfterHundred % 50;
  
    const tenNotes = Math.floor(remainingAfterFifty / 10);
    
    return { hundredNotes, fiftyNotes, tenNotes };
  }
  
  
  function mainFunction() {
    
    const amountInHundreds = parseInt(prompt("Enter the amount to be withdrawn (in hundreds):"));
  
    
    const { hundredNotes, fiftyNotes, tenNotes } = calculateCurrencyNotes(amountInHundreds);
  
    
    console.log(`For Rs. ${amountInHundreds * 100}, the cashier will give:`);
    console.log(`${hundredNotes} notes of Rs. 100`);
    console.log(`${fiftyNotes} notes of Rs. 50`);
    console.log(`${tenNotes} notes of Rs. 10`);
  }
  
  
  mainFunction();
  