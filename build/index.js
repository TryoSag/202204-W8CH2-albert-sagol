"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Robot_1 = require("./types/Robot");
const createRoboto = (type) => {
    const newRoboto = new Robot_1.Robot(type);
    return newRoboto;
};
