import _ from 'lodash';

const defineDiff = (file1, file2) => {
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

  const diff = sortedUniqueKeys.map((key) => {
    if (file1Keys.includes(key) && file2Keys.includes(key)) {
      if (_.isObject(file1[key]) && _.isObject(file2[key])) {
        return { key, children: defineDiff(file1[key], file2[key]), type: 'nested' };
      }
      if (file1[key] === file2[key]) {
        return { key, value1: file1[key], type: 'unchanged' };
      }
      return {
        key, value1: file1[key], value2: file2[key], type: 'changed',
      };
    }
    if (file1Keys.includes(key) && !file2Keys.includes(key)) {
      return { key, value1: file1[key], type: 'deleted' };
    }
    return { key, value2: file2[key], type: 'added' };
  });
  return diff;
};

export default defineDiff;
