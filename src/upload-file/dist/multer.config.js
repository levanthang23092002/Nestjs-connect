"use strict";
exports.__esModule = true;
exports.multerConfig = void 0;
var multer_1 = require("multer");
var uuid_1 = require("uuid");
var path_1 = require("path");
exports.multerConfig = {
    storage: multer_1.diskStorage({
        destination: './uploads',
        filename: function (req, file, callback) {
            var uniqueSuffix = uuid_1.v4() + path_1.extname(file.originalname);
            callback(null, uniqueSuffix);
        }
    })
};
