import { readFileSync } from 'node:fs';
import { cwd } from 'node:process';
import path from 'node:path';

const getPath = (file) => path.resolve(cwd(), '__fixtures__', file);

export const readFilePath = (filepath) => readFileSync(getPath(filepath), 'utf-8');

export default getPath;
