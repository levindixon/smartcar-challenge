import schema from '../json/api_schema.json';

export default {
  getSchema() {
    return new Promise((resolve) => {
      resolve(schema);
    });
  }
};
