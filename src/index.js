import { readFileSync } from 'node:fs';
import defineDiff from './defineDiff.js';
import stylish from './formatters/stylish.js';
import getGlobalPath, { defineFileFormat } from './helpers.js';
import parser from './parsers.js';

const genDiff = (filePath1, filePath2) => {
  const file1 = parser(readFileSync(getGlobalPath(filePath1), 'utf-8'), defineFileFormat(filePath1));
  const file2 = parser(readFileSync(getGlobalPath(filePath2), 'utf-8'), defineFileFormat(filePath2));
  const diff = defineDiff(file1, file2);
  return stylish(diff);
};

export default genDiff;
