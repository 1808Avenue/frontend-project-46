import _ from 'lodash';

const buildDiff = (data1, data2) => {
  const data1Keys = Object.keys(data1);
  const data2Keys = Object.keys(data2);
  const allKeys = data1Keys.concat(data2Keys);
  const uniqueKeys = _.union(allKeys);
  const sortedUniqueKeys = _.sortBy(uniqueKeys);

  const diff = sortedUniqueKeys.map((key) => {
    if (_.has(data1, key) && _.has(data2, key)) {
      if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) {
        return { key, children: buildDiff(data1[key], data2[key]), type: 'nested' };
      }
      if (_.isEqual(data1[key], data2[key])) {
        return { key, value1: data1[key], type: 'unchanged' };
      }
      return {
        key, value1: data1[key], value2: data2[key], type: 'changed',
      };
    }
    if (_.has(data1, key) && !_.has(data2, key)) {
      return { key, value1: data1[key], type: 'deleted' };
    }
    return { key, value2: data2[key], type: 'added' };
  });
  return diff;
};

export default buildDiff;
