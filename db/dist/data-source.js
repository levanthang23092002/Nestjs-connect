"use strict";
exports.__esModule = true;
exports.dataSourceOptions = void 0;
var typeorm_1 = require("typeorm");
exports.dataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123456',
    database: 'hotels',
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/db/migration/*{.js,.ts}'],
    synchronize: false
};
var dataSource = new typeorm_1.DataSource(exports.dataSourceOptions);
exports["default"] = dataSource;
