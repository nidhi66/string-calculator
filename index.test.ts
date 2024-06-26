import { add } from './index';
import {expect, test} from '@jest/globals';

// test cases for add() (numbers string calculator function)
test('given empty string as input, it should give output 0 ', () => {
    expect(add('')).toBe(0);
});

test('given input string with single digit as input, it should give the same digit as output ', () => {
    expect(add('7')).toBe(7);
});

test('given input string "2,4", add() should return 6', () => {
    expect(add('2,4')).toBe(6);
})

test('given input string "1,2", add() should not return anything except 3', () => {
    expect(add('1,2')).not.toBe(4);
})


  