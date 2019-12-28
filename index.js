
const name = '@kazila/event-emitter';
const id = '__id__';

function randomId() {
  return Math.random().toString(36).substr(2, 16);
}

const defineProperty = Object.defineProperty;

function EventEmitter() {
  this[name] = {};
  defineProperty && defineProperty(this, name { enumerable: false, configurable: false });}
}

const prototype = EventEmitter.prototype;

prototype.constructor = EventEmitter;

prototype.on = function (event, listener) {

}

prototype.off = function (event) {}

prototype.clear = function () {}

prototype.once = function () {}

prototype.emit = function () {}

prototype.emitting = function (event, dataArray, listener) {}

EventEmitter.default = EventEmitter;

module.exports = EventEmitter;


