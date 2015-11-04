import BaseStore from './BaseStore.js';
import AppDispatcher from '../dispatcher/AppDispatcher.js';

import {
  API_KEY_UPDATED,
  API_KEY_GET_SUCCESS
} from '../constants/AppConstants';

class ApiKeyStore extends BaseStore {
  constructor(...args) {
    super(...args);
    this.data = '';
  }

  emitChange() {
    this.emit(API_KEY_UPDATED);
  }

  addChangeListener(callback) {
    this.on(API_KEY_UPDATED, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(API_KEY_UPDATED, callback);
  }
}

let store = new ApiKeyStore();

AppDispatcher.register((action) => {
  switch(action.actionType) {
    case API_KEY_GET_SUCCESS:
      store.set(action.apiKey);
      break;
    default:
  }
});

export default store;
