import { readFileSync } from 'node:fs';
import { expect, test } from '@jest/globals';
import genDiff from '../src/index.js';
import getGlobalPath from '../src/helpers.js';

test('gendiff-plain', () => {
  const filePath1 = getGlobalPath('file1.json');
  const filePath2 = getGlobalPath('file2.json');
  const expectedValue = String(readFileSync(getGlobalPath('result.txt')));

  expect(genDiff(filePath1, filePath2)).toEqual(expectedValue);
  expect(genDiff('file1.json', 'file2.json')).toEqual(expectedValue);
});
