import BaseStore from './BaseStore.js';
import AppDispatcher from '../dispatcher/AppDispatcher.js';

import {
  SCHEMA_UPDATED,
  SCHEMA_GET_SUCCESS
} from '../constants/AppConstants';

class SchemaStore extends BaseStore {

  emitChange() {
    this.emit(SCHEMA_UPDATED);
  }

  addChangeListener(callback) {
    this.on(SCHEMA_UPDATED, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(SCHEMA_UPDATED, callback);
  }
}

let store = new SchemaStore();

AppDispatcher.register((action) => {
  switch(action.actionType) {
    case SCHEMA_GET_SUCCESS:
      store.setAll(action.schema);
      break;
    default:
  }
});

export default store;
