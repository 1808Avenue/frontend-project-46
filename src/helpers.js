import { cwd } from 'node:process';
import path from 'node:path';

const getFixturePath = (file) => path.resolve(cwd(), '__fixtures__', file);
export default getFixturePath;

export const defineFileFormat = (filePath) => path.extname(filePath).slice(1);
