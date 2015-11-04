import AppDispatcher from '../dispatcher/AppDispatcher.js';
import api from '../util/api.js';

import {
  SCHEMA_GET_SUCCESS,
  SCHEMA_GET_ERROR,
  API_KEY_GET_SUCCESS,
  API_KEY_GET_ERROR,
  VEHICLE_ID_GET_SUCCESS,
  VEHICLE_ID_GET_ERROR,
} from '../constants/AppConstants';

export default {
  getSchema() {
    api.getSchema()
    .then((schema) => {
      AppDispatcher.dispatch({
        actionType: SCHEMA_GET_SUCCESS,
        schema: schema
      });
    })
    .catch(() => {
      AppDispatcher.dispatch({
        actionType: SCHEMA_GET_ERROR
      });
    });
  },

  getApiKey() {
    api.getApiKey()
    .then((apiKey) => {
      AppDispatcher.dispatch({
        actionType: API_KEY_GET_SUCCESS,
        apiKey: apiKey
      });
    })
    .catch(() => {
      AppDispatcher.dispatch({
        actionType: API_KEY_GET_ERROR
      });
    });
  },

  getVehicleId() {
    api.getVehicleId()
    .then((vehicleId) => {
      AppDispatcher.dispatch({
        actionType: VEHICLE_ID_GET_SUCCESS,
        vehicleId: vehicleId
      });
    })
    .catch(() => {
      AppDispatcher.dispatch({
        actionType: VEHICLE_ID_GET_ERROR
      });
    });
  }
};
