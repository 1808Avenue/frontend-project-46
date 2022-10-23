import { expect, test } from '@jest/globals';
import { readFileSync } from 'node:fs';
import getFixturePath from '../src/helpers.js';
import parser from '../src/parsers.js';

test('parser', () => {
  const data1 = readFileSync(getFixturePath('file1.json'));
  const data2 = readFileSync(getFixturePath('file1.yaml'));
  const expectedJson = parser(readFileSync(getFixturePath('file1.json')));
  const expectedYaml = parser(readFileSync(getFixturePath('file1.yaml')));

  expect(parser(data1, '.json')).toEqual(expectedJson);
  expect(parser(data2, '.yaml')).toEqual(expectedYaml);
});
