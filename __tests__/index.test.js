import { readFileSync } from 'node:fs';
import { expect, test } from '@jest/globals';
import getFixturePath from '../src/helpers.js';
import genDiff from '../src/index.js';

const filePath1 = getFixturePath('file1.yaml');
const filePath2 = getFixturePath('file2.yaml');

test('gendiff', () => {
  const expectedStylishValue = String(readFileSync(getFixturePath('result.stylish.txt')));
  const expectedPlainValue = String(readFileSync(getFixturePath('result.plain.txt')));
  const expectedJsonValue = String(readFileSync(getFixturePath('result.json.txt')));

  expect(genDiff(filePath1, filePath2)).toEqual(expectedStylishValue);
  expect(genDiff(filePath1, filePath2, 'plain')).toEqual(expectedPlainValue);
  expect(genDiff(filePath1, filePath2, 'json')).toEqual(expectedJsonValue);
});
