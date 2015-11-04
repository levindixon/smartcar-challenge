import BaseStore from './BaseStore.js';
import AppDispatcher from '../dispatcher/AppDispatcher.js';

import {
  VEHICLE_ID_UPDATED,
  VEHICLE_ID_GET_SUCCESS
} from '../constants/AppConstants';

class VehicleIdStore extends BaseStore {
  constructor(...args) {
    super(...args);
    this.data = '';
  }

  emitChange() {
    this.emit(VEHICLE_ID_UPDATED);
  }

  addChangeListener(callback) {
    this.on(VEHICLE_ID_UPDATED, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(VEHICLE_ID_UPDATED, callback);
  }
}

const store = new VehicleIdStore();

AppDispatcher.register((action) => {
  switch (action.actionType) {
  case VEHICLE_ID_GET_SUCCESS:
    store.set(action.vehicleId);
    break;
  default:
  }
});

export default store;
