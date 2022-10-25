import _ from 'lodash';

const getValueType = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  } if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
};

const plain = (diff) => {
  const iter = (data, path) => {
    const result = data
      .filter((node) => node.type !== 'unchanged')
      .map((node) => {
        const fullPath = (path === '') ? `${node.key}` : `${path}.${node.key}`;
        switch (node.type) {
          case 'nested':
            return iter(node.children, fullPath);

          case 'deleted':
            return `Property '${fullPath}' was removed`;

          case 'added':
            return `Property '${fullPath}' was added with value: ${getValueType(node.value2)}`;

          case 'changed':
            return `Property '${fullPath}' was updated. From ${getValueType(node.value1)} to ${getValueType(node.value2)}`;

          default:
            throw new Error(`Unknown type: '${node.type}'!`);
        }
      });
    return [...result].join('\n');
  };
  return iter(diff, '');
};

export default plain;
