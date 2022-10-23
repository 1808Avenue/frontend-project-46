import { readFileSync } from 'node:fs';
import { expect, test } from '@jest/globals';
import genDiff from '../src/index.js';
import getFixturePath from '../src/helpers.js';

test('gendiff', () => {
  const filePath1 = getFixturePath('file1.yaml');
  const filePath2 = getFixturePath('file2.yaml');
  const expectedValue = String(readFileSync(getFixturePath('result.txt')));

  expect(genDiff(filePath1, filePath2)).toEqual(expectedValue);
  expect(genDiff('file1.yaml', 'file2.yaml')).toEqual(expectedValue);
});
