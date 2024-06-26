export function add(numbers: string): number {
    if (numbers === '') {
        return 0;
    }

    const delimiter = /,\s*|\n/; // checks for delimeter
    const numbersArray = numbers.split(delimiter).map(Number);

    return numbersArray.reduce((acc, curr) => acc + curr, 0); // adds up the numbers contained in a string
}

const numbers = '1\n2,3';
console.log(`sum of given string: ${numbers} is : ${add(numbers)}`); // prints sum of given numbers string

export default { add }