import { readFileSync } from 'node:fs';
import { expect, test } from '@jest/globals';
import getFixturePath from '../src/helpers.js';
import genDiff from '../src/index.js';

const yamlFilePath1 = getFixturePath('file1.yaml');
const yamlFilePath2 = getFixturePath('file2.yaml');

const jsonFilePath1 = getFixturePath('file1.json');
const jsonFilePath2 = getFixturePath('file2.json');

test('gendiff', () => {
  const expectedStylishValue = String(readFileSync(getFixturePath('result.stylish.txt')));
  const expectedPlainValue = String(readFileSync(getFixturePath('result.plain.txt')));
  const expectedJsonValue = String(readFileSync(getFixturePath('result.json.txt')));

  expect(genDiff(yamlFilePath1, yamlFilePath2)).toEqual(expectedStylishValue);
  expect(genDiff(yamlFilePath1, yamlFilePath2, 'stylish')).toEqual(expectedStylishValue);
  expect(genDiff(yamlFilePath1, yamlFilePath2, 'plain')).toEqual(expectedPlainValue);
  expect(genDiff(yamlFilePath1, yamlFilePath2, 'json')).toEqual(expectedJsonValue);

  expect(genDiff(jsonFilePath1, jsonFilePath2)).toEqual(expectedStylishValue);
  expect(genDiff(jsonFilePath1, jsonFilePath2, 'stylish')).toEqual(expectedStylishValue);
  expect(genDiff(jsonFilePath1, jsonFilePath2, 'plain')).toEqual(expectedPlainValue);
  expect(genDiff(jsonFilePath1, jsonFilePath2, 'json')).toEqual(expectedJsonValue);
});
