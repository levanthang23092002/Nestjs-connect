"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UsersSchema = exports.Users = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var Users = /** @class */ (function () {
    function Users() {
    }
    __decorate([
        mongoose_1.Prop()
    ], Users.prototype, "name");
    __decorate([
        mongoose_1.Prop()
    ], Users.prototype, "phone");
    __decorate([
        mongoose_1.Prop()
    ], Users.prototype, "email");
    __decorate([
        mongoose_1.Prop()
    ], Users.prototype, "passwork");
    Users = __decorate([
        mongoose_1.Schema({
            timestamps: true
        })
    ], Users);
    return Users;
}());
exports.Users = Users;
exports.UsersSchema = mongoose_1.SchemaFactory.createForClass(Users);
