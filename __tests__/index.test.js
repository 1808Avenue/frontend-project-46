import { expect, test } from '@jest/globals';
import genDiff from '../src/index.js';

test('gendiff', () => {
  const filePath1 = '../__fixtures__/file1.json';
  const filePath2 = '../__fixtures__/file2.json';
  const expectedValue = `{
 - follow: false
   host: hexlet.io
 - proxy: 123.234.53.22
 - timeout: 50
 + timeout: 20
 + verbose: true
}`;

  expect(genDiff(filePath1, filePath2)).toEqual(expectedValue);
  expect(genDiff('file1.json', 'file2.json')).toEqual(expectedValue);
});
