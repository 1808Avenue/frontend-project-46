import { cwd } from 'node:process';
import path from 'node:path';

// Получает полный путь до файла
const getGlobalPath = (file) => path.resolve(cwd(), '__fixtures__', file);
export default getGlobalPath;

// Определяет формат файла
export const defineFileFormat = (filePath) => path.extname(filePath);
