"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
//import express, { Request, Response, Application, NextFunction} from "express";
var app = express();
var port = 8080;
app.get('/', function (req, res, next) {
    res.send('Hi World!');
});
app.listen(port, function () { return console.log("Server Started", port); });
