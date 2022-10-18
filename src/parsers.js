import yaml from 'js-yaml';

const parser = (data, fileFormat) => {
  if (fileFormat === '.yml' || fileFormat === '.yaml') {
    return yaml.load(data);
  }

  return JSON.parse(data);
};

export default parser;
