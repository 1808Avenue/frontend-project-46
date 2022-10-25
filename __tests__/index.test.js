import { readFileSync } from 'node:fs';
import { expect, test } from '@jest/globals';
import getFixturePath from '../src/helpers.js';
import genDiff from '../src/index.js';

const filePath1 = getFixturePath('file1.yaml');
const filePath2 = getFixturePath('file2.yaml');

test('gendiff-stylish', () => {
  const expectedStylishValue = String(readFileSync(getFixturePath('result.stylish.txt')));

  expect(genDiff(filePath1, filePath2)).toEqual(expectedStylishValue);
  expect(genDiff('file1.yaml', 'file2.yaml')).toEqual(expectedStylishValue);
});

test('gendiff-plain', () => {
  const expectedPlainValue = String(readFileSync(getFixturePath('result.plain.txt')));

  expect(genDiff(filePath1, filePath2, 'plain')).toEqual(expectedPlainValue);
  expect(genDiff('file1.yaml', 'file2.yaml', 'plain')).toEqual(expectedPlainValue);
});

test('gendiff-json', () => {
  const expectedJsonValue = String(readFileSync(getFixturePath('result.json.txt')));

  expect(genDiff(filePath1, filePath2, 'json')).toEqual(expectedJsonValue);
  expect(genDiff('file1.yaml', 'file2.yaml', 'json')).toEqual(expectedJsonValue);
});
