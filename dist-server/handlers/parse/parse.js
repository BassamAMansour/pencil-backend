"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parse = parse;

var _joi = _interopRequireDefault(require("@hapi/joi"));

var _parse2 = require("../../model/parse/parse");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var parseSchema = _joi["default"].object({
  url: _joi["default"].string().required()
});

function parse(_x, _x2, _x3) {
  return _parse.apply(this, arguments);
}

function _parse() {
  _parse = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return parseSchema.validateAsync(req.params);

          case 3:
            _context.t0 = res;
            _context.next = 6;
            return (0, _parse2.getRenderedUnfurledLink)(req.params.url);

          case 6:
            _context.t1 = _context.sent;

            _context.t0.json.call(_context.t0, _context.t1);

            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t2 = _context["catch"](0);
            next(_context.t2);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));
  return _parse.apply(this, arguments);
}