export function add(numbers: string): number {
    if (numbers === '') {
        return 0;
    }

    const delimiter = /,\s*|;|\n/; // checks for delimeter

    // remove // from starting and join with \n
    const numberWithRemovedStartingPoint = numbers.split(/\n/).filter(line => !line.startsWith("//")).join('\n');

    // removes delimeter like \n , and ; 
    const numbersArray = numberWithRemovedStartingPoint.split(delimiter).map(Number);

    return numbersArray.reduce((acc, curr) => acc + curr, 0); // adds up the numbers contained in a string
}

const numbers = '//;\n1;2';
console.log(`sum of given string: ${numbers} is : ${add(numbers)}`); // prints sum of given numbers string

export default { add }