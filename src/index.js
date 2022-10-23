import { readFileSync } from 'node:fs';
import defineDiff from './defineDiff.js';
import stylish from './formatters/stylish.js';
import getFixturePath, { defineFileFormat } from './helpers.js';
import parser from './parsers.js';

const getDiff = (filePath1, filePath2, format = stylish) => {
  const file1 = parser(readFileSync(getFixturePath(filePath1), 'utf-8'), defineFileFormat(filePath1));
  const file2 = parser(readFileSync(getFixturePath(filePath2), 'utf-8'), defineFileFormat(filePath2));
  const diff = defineDiff(file1, file2);
  return format(diff);
};

export default getDiff;
