import schema from '../json/api_schema.json';

export default {
  getSchema() {
    return new Promise((resolve) => {
      resolve(schema);
    });
  },

  getApiKey() {
    return new Promise((resolve) => {
      const apiKey = Math.random().toString(36).substring(5);
      resolve(apiKey);
    });
  },

  getVehicleId() {
    return new Promise((resolve) => {
      resolve('1234');
    });
  }
};
