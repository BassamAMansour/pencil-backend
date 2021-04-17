"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRenderedUnfurledLink = getRenderedUnfurledLink;

var _sanitizeUrl = require("@braintree/sanitize-url");

var _unfurl = require("unfurl.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getImage(unfurledLink) {
  var _unfurledLink$open_gr, _images$;

  var images = (unfurledLink === null || unfurledLink === void 0 ? void 0 : (_unfurledLink$open_gr = unfurledLink.open_graph) === null || _unfurledLink$open_gr === void 0 ? void 0 : _unfurledLink$open_gr.images) || [];
  return images.length ? (_images$ = images[0]) === null || _images$ === void 0 ? void 0 : _images$.url : undefined;
}

var renderUnfurledLink = function renderUnfurledLink(unfurledLink) {
  return {
    title: unfurledLink.title,
    favicon: unfurledLink.favicon,
    "large-image": getImage(unfurledLink),
    snippet: unfurledLink.description
  };
};

function getRenderedUnfurledLink(_x) {
  return _getRenderedUnfurledLink.apply(this, arguments);
}

function _getRenderedUnfurledLink() {
  _getRenderedUnfurledLink = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {
    var sanitizedUrl, unfurledLink;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            sanitizedUrl = (0, _sanitizeUrl.sanitizeUrl)(url);

            if (sanitizedUrl.substring(0, 4) !== "http") {
              sanitizedUrl = "https://" + sanitizedUrl;
            }

            _context.next = 4;
            return (0, _unfurl.unfurl)(sanitizedUrl);

          case 4:
            unfurledLink = _context.sent;
            return _context.abrupt("return", renderUnfurledLink(unfurledLink));

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getRenderedUnfurledLink.apply(this, arguments);
}