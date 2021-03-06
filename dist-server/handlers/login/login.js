"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = login;

var _joi = _interopRequireDefault(require("@hapi/joi"));

var _login2 = require("../../model/login/login");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _auth = require("../../common/auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var loginSchema = _joi["default"].object({
  username: _joi["default"].string().required(),
  password: _joi["default"].string().required()
});

function login(_x, _x2, _x3) {
  return _login.apply(this, arguments);
}

function _login() {
  _login = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var _req$body, username, password, user, accessToken;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return loginSchema.validateAsync(req.body);

          case 3:
            _req$body = req.body, username = _req$body.username, password = _req$body.password;
            _context.next = 6;
            return (0, _login2.getUser)(username, password);

          case 6:
            user = _context.sent;

            if (user) {
              accessToken = _jsonwebtoken["default"].sign({
                username: user.username,
                role: user.role
              }, _auth.ACCESS_TOKEN_SECRET);
              res.json({
                accessToken: accessToken
              });
            } else {
              res.send("Incorrect username and/or password.");
            }

            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            next(_context.t0);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));
  return _login.apply(this, arguments);
}