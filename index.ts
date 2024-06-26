export function add(numbers: string): number {
    if (numbers === '') {
        return 0;
    }

    const numbersArray = numbers.split(",").map(Number);

    return numbersArray.reduce((acc, curr) => acc + curr, 0); // adds up the numbers contained in a string
}

const numbers = '1,2,3,4,5';
console.log("sum of given string: "+numbers+" is :", add(numbers)); // prints sum of given numbers string

export default { add }