"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var port = 8080;
app.use(function (req, res, next) {
    console.log("Request received at ", Date.now);
});
app.get('/', function (req, res, next) {
    console.log("Route / is accessed");
    res.send("Hello World!");
});
app.listen(port, function () { return console.log("Server is listening in Port ", port); });
