import yaml from 'js-yaml';

const parser = (data, format) => {
  if (format === 'yml' || format === 'yaml') {
    return yaml.load(data);
  }
  return JSON.parse(data);
};

export default parser;
