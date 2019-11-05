"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
//import express, { Request, Response, Application, NextFunction} from "express";
var app = express();
var port = 8070;
app.get('/', function (req, res, next) {
    var productId = req.query.productId;
    var productPrice = req.query.productPrice;
    var responseObject = {
        productId: productId, productPrice: productPrice
    };
    res.send(JSON.stringify(responseObject));
});
app.get('/products', function (req, res, next) {
    console.log("Path is ", req.path);
    var productId = req.query.productId;
    var productPrice = req.query.productPrice;
    var responseObject = {
        response: {
            productId: productId, productPrice: productPrice
        }
    };
    res.send(JSON.stringify(responseObject));
});
app.listen(port, function () { return console.log("Server Started"); });
