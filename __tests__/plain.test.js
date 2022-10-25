import { readFileSync } from 'node:fs';
import { expect, test } from '@jest/globals';
import getFixturePath from '../src/helpers.js';
import defineDiff from '../src/defineDiff.js';
import parser from '../src/parsers.js';
import plain from '../src/formatters/plain.js';

test('formatter-plain', () => {
  const file1 = parser(readFileSync(getFixturePath('file1.yaml')));
  const file2 = parser(readFileSync(getFixturePath('file2.yaml')));
  const diff = defineDiff(file1, file2);
  const expectedValue = String(readFileSync(getFixturePath('result.plain.txt')));

  expect(plain(diff)).toEqual(expectedValue);
});
