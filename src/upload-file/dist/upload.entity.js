"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.upload = void 0;
var typeorm_1 = require("typeorm");
var upload = /** @class */ (function () {
    function upload() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], upload.prototype, "id");
    __decorate([
        typeorm_1.Column()
    ], upload.prototype, "filename");
    __decorate([
        typeorm_1.Column()
    ], upload.prototype, "path");
    __decorate([
        typeorm_1.Column()
    ], upload.prototype, "mimetype");
    __decorate([
        typeorm_1.Column({ type: 'timestamp', "default": function () { return 'CURRENT_TIMESTAMP'; } })
    ], upload.prototype, "uploadedAt");
    upload = __decorate([
        typeorm_1.Entity()
    ], upload);
    return upload;
}());
exports.upload = upload;
