"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.upload = upload;

var _joi = _interopRequireDefault(require("@hapi/joi"));

var _upload2 = require("../../model/files/upload");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var uploadSchema = _joi["default"].object({
  file: _joi["default"].object().required()
});

function uploadFile(_x, _x2) {
  return _uploadFile.apply(this, arguments);
}

function _uploadFile() {
  _uploadFile = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(user, file) {
    var id;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // Using non-unique identifier so that the file gets replaced
            // instead of having lots of duplicates in storage.
            id = user.username + '-' + file.name;
            _context.next = 3;
            return (0, _upload2.uploadFileToStorage)(id, file);

          case 3:
            return _context.abrupt("return", id);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _uploadFile.apply(this, arguments);
}

function upload(_x3, _x4, _x5) {
  return _upload.apply(this, arguments);
}

function _upload() {
  _upload = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var id;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return uploadSchema.validateAsync(req.files);

          case 3:
            _context2.next = 5;
            return uploadFile(req.user, req.files.file);

          case 5:
            id = _context2.sent;
            res.send({
              message: 'File uploaded successfully!',
              id: id
            });
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            next(_context2.t0);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));
  return _upload.apply(this, arguments);
}