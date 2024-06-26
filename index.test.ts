import { add } from './index';
import {expect, test} from '@jest/globals';


test('given empty string as input', () => {
    expect(add('')).toBe(0);
  });
  