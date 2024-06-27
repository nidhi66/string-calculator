export function add(numbers: string): number {
  if (numbers === '') { // manages empty string
      return 0;
  }

  if (numbers.includes("\n")) { // manages newline
    numbers = numbers.replace(/\n/g, ",")
  }

  // manages support for different delimeters
  if (numbers.slice(0, 2) === '//') { // removes starting lines
    let delimeter = RegExp(numbers[2], 'g'); // detects given delimeter
    numbers = numbers.replace(numbers.slice(0, 3), "") // replaces //delimeter(//;) with ""
    numbers = numbers.replace(delimeter, ",") // replaces all occurences of delimeter with ,
  }

  // convert string into array
  const numbersArray = numbers.split(",").map(Number);

  // filter negative numbers
  const negativeNumbers = numbersArray.filter(num => num < 0);

  if (negativeNumbers.length > 0) {
    // throw exception, if negative numbers are included in a string
    throw new Error(`Negative numbers found: ${negativeNumbers.join(', ')}`); 
  }

  return numbersArray.reduce((acc, curr) => acc + curr, 0); // adds up the numbers contained in a string
}

const numbers = '//;\n1;2';
console.log(`sum of given string: ${numbers} is : ${add(numbers)}`); // prints sum of given numbers string

export default { add }