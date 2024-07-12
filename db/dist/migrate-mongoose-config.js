"use strict";
exports.__esModule = true;
var path_1 = require("path");
var migrationConfig = {
    migrationsPath: path_1.resolve(__dirname, 'db', 'migrations'),
    dbConnectionUri: 'mongodb://localhost:27017/mydatabase'
};
exports["default"] = migrationConfig;
