import stylish from './stylish.js';
import plain from './plain.js';

const defineOutputFormat = (formatName) => ((formatName === 'plain') ? plain : stylish);

export default defineOutputFormat;
