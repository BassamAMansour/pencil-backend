"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyRouters = applyRouters;

var _login = _interopRequireDefault(require("./login"));

var _parse = _interopRequireDefault(require("./parse"));

var _translate = _interopRequireDefault(require("./translate"));

var _files = _interopRequireDefault(require("./files"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function applyRouters(app) {
  app.use('/login', _login["default"]);
  app.use('/parse', _parse["default"]);
  app.use('/translate', _translate["default"]);
  app.use('/', _files["default"]);
}