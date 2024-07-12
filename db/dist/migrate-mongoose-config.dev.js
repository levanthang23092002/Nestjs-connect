"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _path = require("path");

var _default = {
  migrationsPath: (0, _path.resolve)('src', 'migrations'),
  dbConnectionUri: 'mongodb://localhost:27017/mydatabase' // Địa chỉ kết nối MongoDB của bạn

};
exports["default"] = _default;