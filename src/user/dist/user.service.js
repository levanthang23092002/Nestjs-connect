"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.UserService = void 0;
var common_1 = require("@nestjs/common");
var users_entity_1 = require("./entities/users.entity");
var typeorm_1 = require("@nestjs/typeorm");
var UserService = /** @class */ (function () {
    function UserService(userRepository) {
        this.userRepository = userRepository;
    }
    UserService.prototype.create = function (createUserDto) {
        return this.userRepository.save(createUserDto);
    };
    UserService.prototype.findAll = function () {
        return this.userRepository.find();
    };
    UserService.prototype.findOne = function (id) {
        return this.userRepository.findOneBy({ id: id });
    };
    UserService.prototype.update = function (id, updateUserDto) {
        return this.userRepository.update(id, updateUserDto);
    };
    UserService.prototype.remove = function (id) {
        return this.userRepository["delete"](id);
    };
    UserService = __decorate([
        common_1.Injectable(),
        __param(0, typeorm_1.InjectRepository(users_entity_1.User))
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
