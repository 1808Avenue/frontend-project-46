import { expect, test } from '@jest/globals';
import { readFileSync } from 'node:fs';
import parser from '../src/parsers.js';
import getFullPath from '../src/helpers.js';

test('parser', () => {
  const data1 = readFileSync(getFullPath('file1.json'));
  const data2 = readFileSync(getFullPath('file1.yml'));
  const expectedValue = {
    host: 'hexlet.io',
    timeout: 50,
    proxy: '123.234.53.22',
    follow: false,
  };

  expect(parser(data1, '.json')).toEqual(expectedValue);
  expect(parser(data2, '.yml')).toEqual(expectedValue);
});
