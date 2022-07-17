"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import express from 'express'
// const express = require('express')
const express_1 = __importDefault(require("express"));
// const asyncHandler = require('express-async-handler')
const router_1 = __importDefault(require("./router"));
const app = (0, express_1.default)();
const port = 3100;
app.use('/', router_1.default);
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
