import { readFileSync } from 'node:fs';
import buildDiff from './build-diff.js';
import defineOutputFormat from './formatters/index.js';
import getFixturePath, { defineFileFormat } from './helpers.js';
import parser from './parsers.js';

const genDiff = (filePath1, filePath2, formatName = 'stylish') => {
  const file1 = parser(readFileSync(getFixturePath(filePath1), 'utf-8'), defineFileFormat(filePath1));
  const file2 = parser(readFileSync(getFixturePath(filePath2), 'utf-8'), defineFileFormat(filePath2));
  const diff = buildDiff(file1, file2);
  const formatOutput = defineOutputFormat(formatName);
  return formatOutput(diff);
};

export default genDiff;
