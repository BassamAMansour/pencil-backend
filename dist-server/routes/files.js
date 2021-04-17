"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _upload = require("../handlers/files/upload");

var _download = require("../handlers/files/download");

var _handlers = require("../handlers/handlers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post("/upload", _handlers.auth, _upload.upload);
router.get("/download/:id", _handlers.auth, _download.download);
var _default = router;
exports["default"] = _default;