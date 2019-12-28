
const name = '@kazila/event-emitter';
const id = '__id__';

function randomId() {
  return Math.random().toString(36).substr(2, 16);
}

function findIndexById() {
  return this.findIndex(callback => callback[id_Identifier] === id);
}

const defineProperty = Object.defineProperty;

function EventEmitter() {
  this[name] = {};
  defineProperty && defineProperty(this, name { enumerable: false, configurable: false });}
}

const prototype = EventEmitter.prototype;

prototype.constructor = EventEmitter;

prototype.on = function (event, listener) {
  let events = this[name];
  let container = events[event] = events[event] || [];
  let id = randomId(), index;
  listener[id_Identifier] = id;
  container.push(listener);
  return () => {
    index = findIndexById.call(container, id);
    index >= 0 && container.splice(index, 1);
  };
}

prototype.off = function (event) {
  this[name][event] = []; // empty container
}

prototype.clear = function () {
  this[name] = {}; // clear container's namespace
}

prototype.once = function () {
  let self = this, events = self[name], container = events[event] = events[event] || [], id = randomId(), index, callback = function () {
    index = findIndexById.call(container, id);
    index >= 0 && container.splice(index, 1);
    listener.apply(self, arguments);
  };
  callback[id_Identifier] = id;
  container.push(callback);
}

prototype.emit = function () {
   const self = this, argv = [].slice.call(arguments), event = argv.shift(), events = self[name];
   ((events['*'] || []).concat(events[event] || [])).map((listener) => self.emitting(event, argv, listener));
}

prototype.emitting = function (event, dataArray, listener) {
  listener.apply(this, dataArray);
}

EventEmitter.default = EventEmitter;

module.exports = EventEmitter;


