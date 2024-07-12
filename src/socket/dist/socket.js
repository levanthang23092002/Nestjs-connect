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
exports.socket = void 0;
var websockets_1 = require("@nestjs/websockets");
var socket = /** @class */ (function () {
    function socket() {
    }
    socket.prototype.onModuleInit = function () {
        this.server.on('connection', function (socket) {
            console.log(socket.id);
            console.log('Connect Success!');
        });
    };
    socket.prototype.onmessage = function (body) {
        console.log(body);
        this.server.emit('onMessage', {
            msg: 'New Message',
            content: body
        });
    };
    __decorate([
        websockets_1.WebSocketServer()
    ], socket.prototype, "server");
    __decorate([
        websockets_1.SubscribeMessage('newMessage'),
        __param(0, websockets_1.MessageBody())
    ], socket.prototype, "onmessage");
    socket = __decorate([
        websockets_1.WebSocketGateway()
    ], socket);
    return socket;
}());
exports.socket = socket;
