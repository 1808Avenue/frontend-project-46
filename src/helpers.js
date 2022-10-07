import path from 'node:path';
import { cwd } from 'node:process';

const getPath = (file) => path.resolve(cwd(), '__fixtures__', file);

export default getPath;
