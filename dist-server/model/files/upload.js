"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadFileToStorage = uploadFileToStorage;

var _files = require("../../common/files");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//TODO: Upload to a file storage service like AWS S3
function uploadFileToStorage(_x, _x2) {
  return _uploadFileToStorage.apply(this, arguments);
}

function _uploadFileToStorage() {
  _uploadFileToStorage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id, file) {
    var uploadPath;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            uploadPath = _files.UPLOAD_DIRECTORY + id;
            _context.next = 3;
            return file.mv(uploadPath);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _uploadFileToStorage.apply(this, arguments);
}