import stylish from './stylish.js';
import plain from './plain.js';

const defineOutputFormat = (formatName) => {
  if (formatName === 'plain') {
    return plain;
  }
  if (formatName === 'json') {
    return JSON.stringify;
  }
  return stylish;
};
export default defineOutputFormat;
