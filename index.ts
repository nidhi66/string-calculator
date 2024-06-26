export function add(numbers: string): number {
    if (numbers === '') {
        return 0;
    }

  return numbers.length;
}

const numbers = '';
console.log("sum of given string: "+numbers+" is :", add('')); // prints sum of given numbers string

export default { add }