import _ from 'lodash';

export const getIndent = (depth, spacesCount = 4) => ' '.repeat((depth * spacesCount) - 2);

export const getBracketIndent = (depth, spacesCount = 4) => ' '.repeat((depth * spacesCount) - spacesCount);

export const stringify = (currentValue, depth = 1) => {
  if (!_.isObject(currentValue)) {
    return `${currentValue}`;
  }

  const indent = getIndent(depth);
  const bracketIndent = getBracketIndent(depth);
  const lines = Object
    .entries(currentValue)
    .map(([key, val]) => `${indent}  ${key}: ${stringify(val, depth + 1)}`);

  return [
    '{',
    ...lines,
    `${bracketIndent}}`,
  ].join('\n');
};

const stylish = (diff) => {
  const iter = (data, depth = 1) => {
    const currentIndent = getIndent(depth);
    const bracketIndent = getBracketIndent(depth);

    const result = data.flatMap((node) => {
      switch (node.type) {
        case 'nested':
          return `${currentIndent}  ${node.key}: ${iter(node.children, depth + 1)}`;

        case 'deleted':
          return `${currentIndent}- ${node.key}: ${stringify(node.value1, depth + 1)}`;

        case 'added':
          return `${currentIndent}+ ${node.key}: ${stringify(node.value2, depth + 1)}`;

        case 'unchanged':
          return `${currentIndent}  ${node.key}: ${stringify(node.value1, depth + 1)}`;

        case 'changed':
          return [
            `${currentIndent}- ${node.key}: ${stringify(node.value1, depth + 1)}`,
            `${currentIndent}+ ${node.key}: ${stringify(node.value2, depth + 1)}`,
          ];

        default:
          throw new Error(`Unknown type: '${node.type}'!`);
      }
    });
    return ['{', ...result, `${bracketIndent}}`].join('\n');
  };
  return iter(diff);
};

export default stylish;
