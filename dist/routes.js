"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWord = void 0;
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function helloWord(resquest, response) {
    var user = CreateUser_1.default({
        name: 'RodrigoPD',
        email: 'ro@gmail.com',
        password: '123456',
        techs: [
            'React',
            'Node.js'
        ],
    });
    return response.json(user);
}
exports.helloWord = helloWord;
