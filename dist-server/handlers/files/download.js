"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.download = download;

var _joi = _interopRequireDefault(require("@hapi/joi"));

var _files = require("../../common/files");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var downloadSchema = _joi["default"].object({
  id: _joi["default"].string().required()
});

function download(_x, _x2, _x3) {
  return _download.apply(this, arguments);
}

function _download() {
  _download = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return downloadSchema.validateAsync(req.params);

          case 3:
            //TODO: Get the file from file storage service like AWS S3
            res.download(_files.UPLOAD_DIRECTORY + req.params.id);
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            next(_context.t0);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }));
  return _download.apply(this, arguments);
}