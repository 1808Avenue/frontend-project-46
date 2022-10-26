import _ from 'lodash';

const defineDiff = (data1, data2) => {
  const data1Keys = Object.keys(data1);
  const data2Keys = Object.keys(data2);
  const allKeys = data1Keys.concat(data2Keys);
  const uniqueKeys = _.union(allKeys);
  const sortedUniqueKeys = _.sortBy(uniqueKeys);

  const diff = sortedUniqueKeys.map((key) => {
    if (data1Keys.includes(key) && data2Keys.includes(key)) {
      if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) {
        return { key, children: defineDiff(data1[key], data2[key]), type: 'nested' };
      }
      if (data1[key] === data2[key]) {
        return { key, value1: data1[key], type: 'unchanged' };
      }
      return {
        key, value1: data1[key], value2: data2[key], type: 'changed',
      };
    }
    if (data1Keys.includes(key) && !data2Keys.includes(key)) {
      return { key, value1: data1[key], type: 'deleted' };
    }
    return { key, value2: data2[key], type: 'added' };
  });
  return diff;
};

export default defineDiff;
