import stylish from './stylish.js';
import plain from './plain.js';

const defineOutputFormat = (formatName) => {
  switch (formatName) {
    case 'stylish':
      return stylish;

    case 'plain':
      return plain;

    case 'json':
      return JSON.stringify;

    default:
      throw new Error(`Unknown format name: '${formatName}'!`);
  }
};

export default defineOutputFormat;
