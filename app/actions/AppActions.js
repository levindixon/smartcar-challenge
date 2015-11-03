import AppDispatcher from '../dispatcher/AppDispatcher.js';
import api from '../util/api.js';

import {
  SCHEMA_GET_SUCCESS,
  SCHEMA_GET_ERROR
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
  }
};
