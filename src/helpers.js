import { cwd } from 'node:process';
import path from 'node:path';

// Получает полный путь до файла
const getFullPath = (file) => path.resolve(cwd(), '__fixtures__', file);
export default getFullPath;

// Определяет формат файла
export const defineFileFormat = (filePath) => path.extname(filePath);
