import _ from 'lodash';
import { readFileSync } from 'node:fs';
import getPath from './helpers.js';

const genDiff = (filePath1, filePath2) => {
  const readPathFile1 = readFileSync(getPath(filePath1), 'utf-8');
  const readPathFile2 = readFileSync(getPath(filePath2), 'utf-8');

  const file1 = JSON.parse(readPathFile1);
  const file2 = JSON.parse(readPathFile2);

  const file1Keys = Object.keys(file1);
  const file2Keys = Object.keys(file2);
  const allKeys = file1Keys.concat(file2Keys);
  const uniqueKeys = allKeys.reduce((acc, key) => {
    if (acc.includes(key)) {
      return acc;
    }
    return [...acc, key];
  }, []);

  const sortedUniqueKeys = _.sortBy(uniqueKeys);
  const result = sortedUniqueKeys.reduce((acc, key) => {
    if (file1Keys.includes(key) && file2Keys.includes(key)) {
      if (file1[key] === file2[key]) {
        return `${acc}\n   ${key}: ${file1[key]}`;
      } if (file1[key] !== file2[key]) {
        return `${acc}\n - ${key}: ${file1[key]}\n + ${key}: ${file2[key]}`;
      }
    }
    if (file1Keys.includes(key) && !file2Keys.includes(key)) {
      return `${acc}\n - ${key}: ${file1[key]}`;
    }

    return `${acc}\n + ${key}: ${file2[key]}`;
  }, '');
  return `{${result}\n}`;
};

export default genDiff;
