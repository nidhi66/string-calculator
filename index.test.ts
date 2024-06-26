import { add } from './index';
import {expect, test} from '@jest/globals';

// test cases for add() (numbers string calculator function)

// input: empty string
test('given empty string as input, it should give output 0 ', () => {
    expect(add('')).toBe(0);
});

// input: string with only one number
test('given input string with single digit as input, it should give the same digit as output ', () => {
    expect(add('7')).toBe(7);
});

// input: comma-separated string with two numbers
test('given input string "2,4", add() should return 6', () => {
    expect(add('2,4')).toBe(6);
})

// input: comma-separated string with two numbers and not producing unexpected output 
test('given input string "1,2", add() should not return anything except 3', () => {
    expect(add('1,2')).not.toBe(4);
})

// input: comma-separated string with more than two numbers
test('given input string "1,2,3,4", add() should return 10', () => {
    expect(add('1,2,3,4')).toBe(10);
})

// input: comma-separated string with more than two numbers and with white space
test('given input string "1,2,3,4,  5", add() should return 15', () => {
    expect(add('1,2,3,4,  5')).toBe(15);
})

// input: comma-separated string with delimeter like \n
test('given input string "1\n2,3", add() should return 6', () => {
    expect(add('1\n2,3')).toBe(6);
})

// input: comma-separated string with continuous delimeters like , and \n
test('given input string "1,\n2,2", add() should return 5', () => {
    expect(add('1,\n2,2')).toBe(5);
})

// input: comma-separated string with starting point // and delimeter ;
test('given input string "//;\n1;2,3", add() should return 6', () => {
    expect(add('//;\n1;2,3')).toBe(6);
})

// input: comma-separated string with negative numbers
test('support given input string with delimeter ;  "//;\n1;2,-3;-7", add() should throw exception -> "Error: Negative numbers found: -3, -7"', () => {
    expect(() => add('//;\n1;2,-3;-7')).toThrowError("Negative numbers found: -3, -7");
})

// input: comma-separated string with starting point // and delimeter %
test('support given input string with delimeter % "//%\n1%2,3\n%%4", add() should return 10', () => {
    expect(add('//%\n1%2,3\n%%4')).toBe(10);
})
  