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

  