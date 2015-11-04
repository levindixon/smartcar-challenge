import { EventEmitter } from 'events';

export default class BaseStore extends EventEmitter {

  constructor(...args) {
    super(...args);
    this.data = new Set([]);
  }

  setAll(items) {
    this.data = new Set(items);
    this.emitChange();
  }

  set(item) {
    this.data = item;
    this.emitChange();
  }

  getAll() {
    return Array.from(this.data);
  }

  get() {
    return this.data;
  }
}
