import { expect, test } from '@jest/globals';
import { readFileSync } from 'node:fs';
import getGlobalPath from '../src/helpers.js';
import parser from '../src/parsers.js';

test('parser', () => {
  const data1 = readFileSync(getGlobalPath('file1.json'));
  const data2 = readFileSync(getGlobalPath('file1.yml'));
  const expectedJson = parser(readFileSync(getGlobalPath('file1.json')));
  const expectedYml = parser(readFileSync(getGlobalPath('file1.yml')));

  expect(parser(data1, '.json')).toEqual(expectedJson);
  expect(parser(data2, '.yml')).toEqual(expectedYml);
});
